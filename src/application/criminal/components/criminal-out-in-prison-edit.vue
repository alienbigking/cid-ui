<template>
  <div v-loading='loading'>
    <el-form class="form-criminal" :model="criminalOutInPrison" :rules="rules" ref="form" label-position="top">
        <el-form-item class="w-px180" label="出监日期" prop="outgoingDate">
          <el-date-picker v-model="criminalOutInPrison.outgoingDate"  value-format="yyyy-MM-dd" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item class="w-px180 margin-left40" label="入监日期" prop="entryDate">
          <el-date-picker v-model="criminalOutInPrison.entryDate" value-format="yyyy-MM-dd" type="date"></el-date-picker>
        </el-form-item>
        <el-form-item class="w-px180 margin-left40" label="出监事由" prop="reasonName">
              <el-select v-model="criminalOutInPrison.reasonName" value-key="name" :loading="initializing" placeholder="请选择出监事由" clearable>
                <el-option v-for="(item, index) in allOutInPrisonReasons" :key="index" :label="item.name" :value="item"></el-option>
              </el-select>
        </el-form-item>
        <el-form-item class="w100" label="备注" prop="remark" >
          <el-input type="textarea" resize="none" v-model="criminalOutInPrison.remark"></el-input>
        </el-form-item>
        <div class="el-form-item el-form-item-div">
          <el-button class="button-cancel" @click="onClose">返 回</el-button>
          <el-button class="button-confirm" :loading="saving" @click="onSave">保 存</el-button>
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
      type: String
    },
    editDialogVisible: {
      type: Boolean
    }
  },
  data() {
    return {
      criminalOutInPrison: _.cloneDeep(this.$store.state.criminal.criminalOutInPrison),
      rules: {
        startDate: [{ required: true, message: "请输入开始日期" }],
        endDate: [{ required: true, message: "请输入结束日期" }]
      },
      loading: true,
      saving: false,
      initializing: true,
      allOutInPrisonReasons: []
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
    criminalOutInPrison: {
      handler: _.debounce(function(criminalOutInPrison) {
        this.$store.commit("updateCriminalOutInPrison", criminalOutInPrison);
      }, 500),
      deep: true
    }
  },
  created() {
    Promise.all([criminalLookupService.getAllOutInPrisonReasons()]).then(response => {
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
          if (this.criminalOutInPrison.id) {
            // 修改
            let criminalOutInPrison = Object.assign({}, this.criminalOutInPrison);
            Object.keys(criminalOutInPrison).map(key => {
            if (criminalOutInPrison[key] instanceof Object) {
              let obj = Object.assign({}, criminalOutInPrison[key]);
              criminalOutInPrison[key] = obj.name;
            }
            });
            this.$store.commit("updateCriminalOutInPrison", criminalOutInPrison);
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
            let criminalOutInPrison = Object.assign({}, this.criminalOutInPrison);
            Object.keys(criminalOutInPrison).map(key => {
            if (criminalOutInPrison[key] instanceof Object) {
              let obj = Object.assign({}, criminalOutInPrison[key]);
              let str = key.substring(0, key.lastIndexOf("Name"));
              criminalOutInPrison[`${str}Code`] = obj.code;
              criminalOutInPrison[key] = obj.name;
            }
            });
            this.$store.commit("updateCriminalOutInPrison", criminalOutInPrison);
            this.addCriminalOutInPrison(criminalOutInPrison)
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
        this.criminalOutInPrison = { criminalId: this.$route.params.id, id: null };
        this.$store.commit("updateCriminalOutInPrison", this.criminalOutInPrison);
        this.loading = false;
      } else {
        this.getCriminalOutInPrison(this.criminalOutInPrisonId).then(() => {
          this.criminalOutInPrison = _.cloneDeep(
            this.$store.state.criminal.criminalOutInPrison
          );
          this.loading = false;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-criminal {
  padding: 0 8px 0 28px;
  .w-px180 {
    width: 180px;
    float: left;
    padding-right: 0px;
    margin-right: 20px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  .margin-left40 {
    margin-left: 20px;
  }
  .w100 {
    padding-left: 0px;
  }
}
</style>
