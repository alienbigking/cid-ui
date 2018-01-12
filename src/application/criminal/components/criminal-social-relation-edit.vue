<template>
  <div v-loading="loading">
    <el-form class="form-criminal" :model="form" :rules="rules" ref="form" label-position="top">
      <el-form-item class="w25" label="称谓" prop="criminalSocialRelation.appellation">
        <el-input v-model="form.criminalSocialRelation.appellation"></el-input>
      </el-form-item>
      <el-form-item class="w25" label="姓名" prop="criminalSocialRelation.name">
        <el-input v-model="form.criminalSocialRelation.name"></el-input>
      </el-form-item>
      <el-form-item class="w25" label="年龄" prop="criminalSocialRelation.age">
        <el-input v-model="form.criminalSocialRelation.age" type="number"></el-input>
      </el-form-item>
      <el-form-item class="w25" label="公司" prop="criminalSocialRelation.company">
        <el-input v-model="form.criminalSocialRelation.company"></el-input>
      </el-form-item>
      <el-form-item class="w25" label="职业" prop="criminalSocialRelation.occupation">
        <el-input v-model="form.criminalSocialRelation.occupation"></el-input>
      </el-form-item>
      <el-form-item class="w25" label="政治面貌" prop="criminalSocialRelation.selectedPoliticalStatus">
        <el-select v-model="form.selectedPoliticalStatus" value-key="code" :loading="initializing" clearable>
          <el-option v-for="(item, index) in allPoliticalStatuses" :key="index" :label="item.name" :value="item"></el-option>
        </el-select>
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
    criminalSocialRelationId: {
      type: String
    },
    editDialogVisible: {
      type: Boolean
    }
  },
  data() {
    return {
      form: {
        selectedPoliticalStatus: null,
        criminalSocialRelation: _.cloneDeep(
          this.$store.state.criminal.criminalSocialRelation
        )
      },
      rules: {
        "criminalSocialRelation.appellation": [
          { required: true, message: "请输入称谓" },
          { max: 50, message: "长度在 1 到 50 个字符" }
        ],
        "criminalSocialRelation.name": [
          { required: true, message: "请输入姓名" },
          { max: 100, message: "长度在 1 到 100 个字符" }
        ]
      },
      initializing: true,
      allPoliticalStatuses: [],
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
    "form.selectedPoliticalStatus"(val) {
      let obj = {
        politicalStatusCode: val.code,
        politicalStatusName: val.name
      };
      this.$store.commit("updateCriminalSocialRelation", obj);
    },
    "form.criminalSocialRelation": {
      handler: _.debounce(function(criminalSocialRelation) {
        this.$store.commit(
          "updateCriminalSocialRelation",
          criminalSocialRelation
        );
      }, 500),
      deep: true
    }
  },
  created() {
    Promise.all([
      criminalLookupService.getAllPoliticalStatuses()
    ]).then(response => {
      this.allPoliticalStatuses = response[0];
      this.initializing = false;
    });
    this.render();
  },
  methods: {
    ...mapActions([
      "getCriminalSocialRelation",
      "addCriminalSocialRelation",
      "updateCriminalSocialRelation",
      "getAllCriminalSocialRelations"
    ]),
    onClose() {
      this.$emit("on-close");
    },
    onSave() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.criminalSocialRelation.id) {
            // 修改
            this.saving = true;
            this.updateCriminalSocialRelation()
              .then(res => {
                this.saving = false;
                this.getAllCriminalSocialRelations(this.$route.params.id);
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
            this.addCriminalSocialRelation()
              .then(res => {
                this.saving = false;
                this.getAllCriminalSocialRelations(this.$route.params.id);
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
      if (!this.criminalSocialRelationId) {
        this.form.selectedPoliticalStatus = {};
        this.form.criminalSocialRelation = { criminalId: this.$route.params.id, id: null };
        this.loading = false;
      } else {
        this.getCriminalSocialRelation(this.criminalSocialRelationId).then(() => {
          this.form.criminalSocialRelation = _.cloneDeep(
            this.$store.state.criminal.criminalSocialRelation
          );
          this.form.selectedPoliticalStatus = {
            code: this.form.criminalSocialRelation.politicalStatusCode,
            name: this.form.criminalSocialRelation.politicalStatusName
          };
          this.loading = false;
        });
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.el-form .el-form-item.el-form-item-div {
    justify-content: center;
}
</style>
