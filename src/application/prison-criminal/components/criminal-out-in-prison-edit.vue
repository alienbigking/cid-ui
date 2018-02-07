<template>
  <div v-loading='loading'>
    <el-form
      class="form-criminal"
      :model="form"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        class="w-px180"
        label="出监日期"
        prop="criminalOutInPrison.outgoingDate">
        <el-date-picker
          v-model="form.criminalOutInPrison.outgoingDate"
          value-format="yyyy-MM-dd"
          type="date"/>
      </el-form-item>
      <el-form-item
        class="w-px180"
        label="入监日期"
        prop="criminalOutInPrison.entryDate">
        <el-date-picker
          v-model="form.criminalOutInPrison.entryDate"
          value-format="yyyy-MM-dd"
          type="date"/>
      </el-form-item>
      <el-form-item
        class="w-px180"
        label="出监事由"
        prop="selectedOutInPrisonReasons">
        <el-select
          v-model="form.selectedOutInPrisonReasons"
          value-key="code"
          :loading="initializing"
          placeholder="请选择出监事由"
          clearable>
          <el-option
            v-for="(item, index) in allOutInPrisonReasons"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <el-form-item
        class="w100"
        label="备注"
        prop="criminalOutInPrison.remark" >
        <el-input
          type="textarea"
          resize="none"
          v-model="form.criminalOutInPrison.remark"/>
      </el-form-item>
      <div class="el-form-item-div">
        <el-button
          class="button-cancel"
          @click="onClose">返 回</el-button>
        <el-button
          class="button-confirm"
          :loading="saving"
          @click="onSave">保 存</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { default as criminalLookupService } from "@/application/common/service/lookup/criminal-lookup-service";
import _ from "lodash";

export default {
  props: {
    criminalOutInPrisonId: {
      type: String,
      default: ""
    },
    editDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        selectedOutInPrisonReasons: {},
        criminalOutInPrison: _.cloneDeep(
          this.$store.state.prisonCriminal.criminalOutInPrison
        )
      },
      rules: {
        "criminalOutInPrison.outgoingDate": [{ required: true, message: "请输入出监日期" }],
        "criminalOutInPrison.entryDate": [{ required: true, message: "请输入入监日期" }],
        selectedOutInPrisonReasons: [{ required: true, message: "请选择出监事由" }]
      },
      initializing: true,
      allOutInPrisonReasons: [],
      loading: true,
      saving: false
    };
  },
  watch: {
    editDialogVisible(val) {
      if (val) {
        this.loading = true;
        this.$refs.form.resetFields();
        this.render();
      }
    },
    "form.selectedOutInPrisonReasons"(val) {
      this.$set(
        this.form.criminalOutInPrison,
        "reasonCode",
        val.code
      );
      this.$set(
        this.form.criminalOutInPrison,
        "reasonName",
        val.name
      );
    },
    "form.criminalOutInPrison": {
      handler: _.debounce(function(criminalOutInPrison) {
        this.$store.commit("updateCriminalOutInPrison", criminalOutInPrison);
      }, 500),
      deep: true
    }
  },
  created() {
    Promise.all([
      criminalLookupService.getAllOutInPrisonReasons()
    ]).then(response => {
      this.allOutInPrisonReasons = response[0];
      this.initializing = false;
      this.render();
    });
  },
  methods: {
    ...mapActions([
      "getCriminalOutInPrison",
      "addCriminalOutInPrison",
      "updateCriminalOutInPrison",
      "getAllCriminalOutInPrisons"
    ]),
    onClose() {
      this.$emit("on-close");
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.criminalOutInPrison.id) {
            // 修改
            this.saving = true;
            this.updateCriminalOutInPrison()
              .then(res => {
                this.saving = false;
                this.getAllCriminalOutInPrisons(this.$route.params.id);
                this.$message.success("修改成功");
                this.$emit("on-close");
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("修改失败");
              });
          } else {
            // 新增
            this.saving = true;
            this.addCriminalOutInPrison()
              .then(res => {
                this.saving = false;
                this.getAllCriminalOutInPrisons(this.$route.params.id);
                this.$message.success("新增成功");
                this.$emit("on-close");
              })
              .catch(() => {
                this.saving = false;
                this.$message.error("新增失败");
              });
          }
        }
      });
    },
    render() {
      if (!this.criminalOutInPrisonId) {
        this.form.selectedOutInPrisonReasons = {};
        this.$store.commit("setCriminalOutInPrison", { criminalId: this.$route.params.id });
        this.form.criminalOutInPrison = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalOutInPrison
          );
        this.loading = false;
      } else {
        this.getCriminalOutInPrison(this.criminalOutInPrisonId).then(() => {
          this.form.criminalOutInPrison = _.cloneDeep(
            this.$store.state.prisonCriminal.criminalOutInPrison
          );
          this.form.selectedOutInPrisonReasons = {
            code: this.form.criminalOutInPrison.reasonCode,
            name: this.form.criminalOutInPrison.reasonName
          };
          this.loading = false;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-criminal {
  padding: 0 15px 0 35px;
  .w-px180 {
    width: 180px;
    float: left;
    margin-right: 40px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  .w100 {
    padding-left: 0px;
  }
}
</style>
