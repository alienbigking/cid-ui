<template>
  <div v-loading="loading">
    <el-form
      class="form-criminal"
      :model="form"
      :rules="rules"
      ref="form"
      label-position="top">
      <el-form-item
        class="w25"
        label="称谓"
        prop="criminalSocialRelation.appellation">
        <el-input
        v-model="form.criminalSocialRelation.appellation"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="姓名"
        prop="criminalSocialRelation.name">
        <el-input v-model="form.criminalSocialRelation.name"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="年龄"
        prop="criminalSocialRelation.age">
        <el-input
          v-model="form.criminalSocialRelation.age"
          type="number"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="公司"
        prop="criminalSocialRelation.company">
        <el-input v-model="form.criminalSocialRelation.company"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="职业"
        prop="criminalSocialRelation.occupation">
        <el-input v-model="form.criminalSocialRelation.occupation"/>
      </el-form-item>
      <el-form-item
        class="w25"
        label="政治面貌"
        prop="criminalSocialRelation.selectedPoliticalStatus">
        <el-select
          v-model="form.selectedPoliticalStatus"
          value-key="code"
          :loading="initializing"
          clearable>
          <el-option
            v-for="(item, index) in allPoliticalStatuses"
            :key="index"
            :label="item.name"
            :value="item"/>
        </el-select>
      </el-form-item>
      <div class="has-right-button">
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
import { default as criminalLookupService } from "@/application/common/service/lookup/criminal/criminal-lookup-service";
import _ from "lodash";

export default {
    props: {
        criminalSocialRelationId: {
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
                selectedPoliticalStatus: {},
                criminalSocialRelation: _.cloneDeep(
                    this.$store.state.prisonCriminal.criminalSocialRelation
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
            this.$set(
                this.form.criminalSocialRelation,
                "politicalStatusCode",
                val.code
            );
            this.$set(
                this.form.criminalSocialRelation,
                "politicalStatusName",
                val.name
            );
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
        Promise.all([criminalLookupService.getAllPoliticalStatuses()]).then(
            response => {
                this.allPoliticalStatuses = response[0];
                this.initializing = false;
                this.render();
            }
        );
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
                                this.getAllCriminalSocialRelations(
                                    this.$route.params.id
                                );
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
                                this.getAllCriminalSocialRelations(
                                    this.$route.params.id
                                );
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
                this.$store.commit("setCriminalSocialRelation", {
                    criminalId: this.$route.params.id
                });
                this.form.criminalSocialRelation = _.cloneDeep(
                    this.$store.state.prisonCriminal.criminalSocialRelation
                );
                this.loading = false;
            } else {
                this.getCriminalSocialRelation(
                    this.criminalSocialRelationId
                ).then(() => {
                    this.form.criminalSocialRelation = _.cloneDeep(
                        this.$store.state.prisonCriminal.criminalSocialRelation
                    );
                    this.form.selectedPoliticalStatus = {
                        code: this.form.criminalSocialRelation
                            .politicalStatusCode,
                        name: this.form.criminalSocialRelation
                            .politicalStatusName
                    };
                    this.loading = false;
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.el-form .el-form-item.has-right-button {
    justify-content: flex-end;
}
</style>
