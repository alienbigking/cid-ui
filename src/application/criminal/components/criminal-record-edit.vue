<template>
  <div v-loading="loading">
    <el-form class="form-criminal" :model="form" :rules="rules" ref="form" label-position="top">
        <el-form-item class="w25" label="逮捕日期" prop="criminalRecord.arrestDate">
          <el-date-picker v-model="form.criminalRecord.arrestDate" type="date" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item class="w25" label="羁押日期" prop="criminalRecord.detentionDate">
          <el-date-picker v-model="form.criminalRecord.detentionDate" type="date"  value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item class="w25" label="逮捕机关" prop="selectedArrestOrgan">
          <el-select v-model="form.selectedArrestOrgan" value-key="code" :loading="initializing" clearable>
            <el-option v-for="(item, index) in allPoliceStations" :key="index" :label="item.name" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25"></el-form-item>

        <el-form-item class="w25" label="起诉机关" prop="selectedProsecutionOrgan">
          <el-select v-model="form.selectedProsecutionOrgan" value-key="code" :loading="initializing" clearable>
            <el-option v-for="(item, index) in allProcuratorates" :key="index" :label="item.name" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="起诉罪名" prop="criminalRecord.prosecutionAccusation">
          <el-input v-model="form.criminalRecord.prosecutionAccusation"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="起诉字号" prop="criminalRecord.prosecutionLetterNumber">
          <el-input v-model.number="form.criminalRecord.prosecutionLetterNumber"></el-input>
        </el-form-item>
        <el-form-item class="w25"></el-form-item>

        <el-form-item class="w25" label="一审机关" prop="selectedFirstTrialOrgan">
          <el-select v-model="form.selectedFirstTrialOrgan" value-key="code" :loading="initializing" clearable>
            <el-option v-for="(item, index) in allCourts" :key="index" :label="item.name" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="一审字号" prop="criminalRecord.firstTrialLetterNumber">
          <el-input v-model.number="form.criminalRecord.firstTrialLetterNumber"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="终审机关" prop="selectedFinalTrialOrgan">
          <el-select v-model="form.selectedFinalTrialOrgan" value-key="code" :loading="initializing" clearable>
            <el-option v-for="(item, index) in allCourts" :key="index" :label="item.name" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="终审字号" prop="criminalRecord.finalTrialLetterNumber">
          <el-input v-model.number="form.criminalRecord.finalTrialLetterNumber"></el-input>
        </el-form-item>

        <el-form-item class="w25" label="判决机关" prop="selectedDecisionOrgan">
          <el-select v-model="form.selectedDecisionOrgan" value-key="code" :loading="initializing" clearable>
            <el-option v-for="(item, index) in allCourts" :key="index" :label="item.name" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="w25" label="判决罪名" prop="criminalRecord.decisionAccusation">
          <el-input v-model="form.criminalRecord.decisionAccusation"></el-input>
        </el-form-item>
        <el-form-item class="w25" label="判决字号" prop="criminalRecord.decisionLetterNumber">
          <el-input v-model.number="form.criminalRecord.decisionLetterNumber"></el-input>
        </el-form-item>

        <el-form-item class="w25" label="判决日期" prop="criminalRecord.decisionDate">
          <el-date-picker v-model="form.criminalRecord.decisionDate" type="date"  value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>

        <el-form-item class="w25" label="剥政年限" prop="criminalRecord.decisionDeprivationPoliticalRightYears">
          <el-input v-model.number="form.criminalRecord.decisionDeprivationPoliticalRightYears"></el-input>
        </el-form-item>

        <el-form-item class="w50" label="刑期日期" prop="startEndTime">
          <el-date-picker v-model="form.startEndTime" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item class="w25" label="有否上诉" prop="criminalRecord.appealed">
          <el-select v-model="form.criminalRecord.appealed" clearable>
              <el-option label="是" :value="true"></el-option>
              <el-option label="否" :value="false"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item class="w100" label="判决明细" prop="criminalRecord.decisionDetail">
          <el-input type="textarea" resize="none" v-model="form.criminalRecord.decisionDetail"></el-input>
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
import _ from "lodash";

export default {
    props: {
        criminalRecordId: {
            type: String
        },
        editDialogVisible: {
            type: Boolean
        }
    },
    data() {
        return {
            form: {
                selectedArrestOrgan: {},
                selectedProsecutionOrgan: {},
                selectedFirstTrialOrgan: {},
                selectedFinalTrialOrgan: {},
                selectedDecisionOrgan: {},
                startEndTime: [],
                criminalRecord: _.cloneDeep(
                    this.$store.state.criminal.criminalRecord
                )
            },
            rules: {
                "criminalRecord.decisionAccusation": [
                    { required: true, message: "请输入判决罪名" }
                ],
                "criminalRecord.arrestDate": [
                    { required: true, message: "请选择逮捕日期" }
                ],
                "criminalRecord.detentionDate": [
                    { required: true, message: "请输入羁押日期" }
                ],
                selectedArrestOrgan: [
                    { required: true, message: "请选择逮捕机关" }
                ],
                selectedProsecutionOrgan: [
                    { required: true, message: "请选择起诉机关" }
                ],
                "criminalRecord.prosecutionLetterNumber": [
                    { required: true, message: "请输入起诉字号" },
                    { type: "number", message: "必须为数字值" }
                ],
                "criminalRecord.prosecutionAccusation": [
                    { required: true, message: "请输入起诉罪名" }
                ],
                selectedFirstTrialOrgan: [
                    { required: true, message: "请选择一审机关" }
                ],
                "criminalRecord.firstTrialLetterNumber": [
                    { required: true, message: "请输入一审字号" },
                    { type: "number", message: "必须为数字值" }
                ],
                "criminalRecord.finalTrialLetterNumber": [
                    { type: "number", message: "必须为数字值" }
                ],
                selectedDecisionOrgan: [
                    { required: true, message: "请选择判决机关" }
                ],
                "criminalRecord.decisionLetterNumber": [
                    { required: true, message: "请输入判决字号" },
                    { type: "number", message: "必须为数字值" }
                ],
                "criminalRecord.decisionDate": [
                    { required: true, message: "请选择判决日期" }
                ],
                "criminalRecord.decisionDeprivationPoliticalRightYears": [
                    { required: true, message: "请输入判决剥政年限" },
                    { type: "number", message: "必须为数字值" },
                    { validator: this.$validators.dataRange1t10d }
                ],
                selectedFinalTrialOrgan: [
                    { required: true, message: "请输入终审机关" }
                ],
                startEndTime: [{ required: true, message: "请选择刑期日期" }],
                "criminalRecord.appealed": [
                    { required: true, message: "请选择有否上诉" }
                ]
            },
            pickerBeginDateBefore: {
                disabledDate: time => {
                    let beginDateVal = this.form.criminalRecord
                        .decisionPrisonTermEndDate;
                    if (beginDateVal) {
                        return time.getTime() > beginDateVal;
                    }
                }
            },
            pickerBeginDateAfter: {
                disabledDate: time => {
                    let beginDateVal = this.form.criminalRecord
                        .decisionPrisonTermStartDate;
                    if (beginDateVal) {
                        return time.getTime() < beginDateVal;
                    }
                }
            },
            initializing: true,
            allCourts: [],
            allPoliceStations: [],
            allProcuratorates: [],
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
        "form.selectedArrestOrgan"(val) {
            this.$set(this.form.criminalRecord, "arrestOrganCode", val.code);
            this.$set(this.form.criminalRecord, "arrestOrganName", val.name);
        },
        "form.selectedProsecutionOrgan"(val) {
            this.$set(
                this.form.criminalRecord,
                "prosecutionOrganCode",
                val.code
            );
            this.$set(
                this.form.criminalRecord,
                "prosecutionOrganName",
                val.name
            );
        },
        "form.selectedFirstTrialOrgan"(val) {
            this.$set(
                this.form.criminalRecord,
                "firstTrialOrganCode",
                val.code
            );
            this.$set(
                this.form.criminalRecord,
                "firstTrialOrganName",
                val.name
            );
        },
        "form.selectedFinalTrialOrgan"(val) {
            this.$set(
                this.form.criminalRecord,
                "finalTrialOrganCode",
                val.code
            );
            this.$set(
                this.form.criminalRecord,
                "finalTrialOrganName",
                val.name
            );
        },
        "form.selectedDecisionOrgan"(val) {
            this.$set(this.form.criminalRecord, "decisionOrganCode", val.code);
            this.$set(this.form.criminalRecord, "decisionOrganName", val.name);
        },
        "form.startEndTime"(val) {
            this.$set(
                this.form.criminalRecord,
                "decisionPrisonTermStartDate",
                val[0]
            );
            this.$set(
                this.form.criminalRecord,
                "decisionPrisonTermEndDate",
                val[1]
            );
        },
        "form.criminalRecord": {
            handler: _.debounce(function(criminalRecord) {
                this.$store.commit("updateCriminalRecord", criminalRecord);
            }, 500),
            deep: true
        }
    },
    created() {
        Promise.all([
            this.getAllCourts(),
            this.getAllPoliceStations(),
            this.getAllProcuratorates()
        ]).then(() => {
            this.allCourts = this.$store.state.court.allCourts;
            this.allPoliceStations = this.$store.state.policeStation.allPoliceStations;
            this.allProcuratorates = this.$store.state.procuratorate.allProcuratorates;
            this.initializing = false;
            this.render();
        });
    },
    methods: {
        ...mapActions([
            "getAllCourts",
            "getAllPoliceStations",
            "getAllProcuratorates",
            "getCriminalRecord",
            "addCriminalRecord",
            "updateCriminalRecord",
            "getAllCriminalRecords"
        ]),
        onClose() {
            this.$emit("on-close");
        },
        onSave() {
            // console.log(this.value1);
            this.$refs["form"].validate(valid => {
                if (valid) {
                    if (this.form.criminalRecord.id) {
                        // 修改
                        this.saving = true;
                        this.updateCriminalRecord()
                            .then(res => {
                                this.saving = false;
                                this.getAllCriminalRecords(
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
                        this.addCriminalRecord()
                            .then(res => {
                                this.saving = false;
                                this.getAllCriminalRecords(
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
            if (!this.criminalRecordId) {
                this.form.selectedArrestOrgan = {};
                this.form.selectedProsecutionOrgan = {};
                this.form.selectedFirstTrialOrgan = {};
                this.form.selectedFinalTrialOrgan = {};
                this.form.selectedDecisionOrgan = {};
                this.$store.commit("setCriminalRecord", {
                    criminalId: this.$route.params.id
                });
                this.form.criminalRecord = _.cloneDeep(
                    this.$store.state.criminal.criminalRecord
                );
                this.loading = false;
            } else {
                this.getCriminalRecord(this.criminalRecordId).then(() => {
                    this.form.criminalRecord = _.cloneDeep(
                        this.$store.state.criminal.criminalRecord
                    );
                    this.form.criminalRecord.decisionLetterNumber = Number(
                        this.form.criminalRecord.decisionLetterNumber
                    );
                    this.form.criminalRecord.finalTrialLetterNumber = Number(
                        this.form.criminalRecord.finalTrialLetterNumber
                    );
                    this.form.criminalRecord.firstTrialLetterNumber = Number(
                        this.form.criminalRecord.firstTrialLetterNumber
                    );
                    this.form.criminalRecord.prosecutionLetterNumber = Number(
                        this.form.criminalRecord.prosecutionLetterNumber
                    );
                    this.form.selectedArrestOrgan = {
                        code: this.form.criminalRecord.arrestOrganCode,
                        name: this.form.criminalRecord.arrestOrganName
                    };
                    this.form.selectedProsecutionOrgan = {
                        code: this.form.criminalRecord.prosecutionOrganCode,
                        name: this.form.criminalRecord.prosecutionOrganName
                    };
                    this.form.selectedFirstTrialOrgan = {
                        code: this.form.criminalRecord.firstTrialOrganCode,
                        name: this.form.criminalRecord.firstTrialOrganName
                    };
                    this.form.selectedFinalTrialOrgan = {
                        code: this.form.criminalRecord.finalTrialOrganCode,
                        name: this.form.criminalRecord.finalTrialOrganName
                    };
                    this.form.selectedDecisionOrgan = {
                        code: this.form.criminalRecord.decisionOrganCode,
                        name: this.form.criminalRecord.decisionOrganName
                    };
                    this.form.startEndTime = [
                        this.form.criminalRecord.decisionPrisonTermStartDate,
                        this.form.criminalRecord.decisionPrisonTermEndDate
                    ];
                    this.loading = false;
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
