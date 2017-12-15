<template>
    <div class="card">
        <div class="um-title">
            <p>修改监区</p>
        </div>
        <el-form class="formPadding" :model="area" :rules="rules" ref="formName" label-position="top">
            <el-form-item class="w50" label="监区名称" >
                <el-input v-model="area.name"></el-input>
            </el-form-item>
            <el-form-item class="w50 the-disabled" label="上级监区">
                <!-- <el-select  v-model="area.parentPrisonArea.id" value-key="id" clearable :loading="getting">
                    <el-option v-for="(item, index) in areaList" :key="index" :label="item.name" :value="item.id"></el-option>
                </el-select> -->
                <span class="el-input__inner">{{  area.parentPrisonArea.name }}</span>
            </el-form-item>
            <el-form-item class="w100 textarea" label="监区描述">
                <el-input :maxlength="255" type="textarea" resize="none" v-model="area.description"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button @click="goBack">返 回</el-button>
                <el-button type="primary" :loading="editing" @click="onSubmit(area)">确认</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

export default {
    data() {
        return {
            prisonAreaId: '',
            area: {
                name: '',
                parentPrisonArea: { name: "" },
                description: ''
            },
            rules: {},
            areaList: [],
            // getting: true,
            editing: false,
            flag: ''
        };
    },
    methods: {
        ...mapActions(["getPrisonArea", "getAllPrisonAreasByJail", "updatePrisonArea"]),
        goBack() {
            this.$router.push(`/prison-area/list`);
        },
        // getAreaList() {
        //     this.getAllPrisonAreasByJail(_.merge({ jailId: "13427caf-e07b-11e7-b5c5-525400c79e4e" }, this.pagination)).then(res => {
        //         this.areaList = this.$store.state.prisonArea.prisonAreasJail.content;
        //         this.getting = false;
        //     });
        // },
        onSubmit(e) {
            this.$refs["formName"].validate((valid) => {
                if (valid) {
                    this.editing = true;
                    // console.log(e);
                    let params = _.transform(Object.assign({}, e), (result, item, key) => {
                        if (["id", "name", "description"].indexOf(key) > -1) {
                            if (item || item === 0) {
                                result[key] = item;
                            }
                        }
                    });
                    this.updatePrisonArea(params).then(res => {
                        this.editing = false;
                        this.$message.success('修改成功');
                        this.$router.push(`/prison-area/list`);
                    });
                }
            });
       },
        render() {
            this.getPrisonArea(this.prisonAreaId).then(res => {
                this.area = _.cloneDeep(this.$store.state.prisonArea.prisonArea);
                this.flag.close();
            });
        }
    },
    created() {
        this.prisonAreaId = this.$route.params.id;
        this.flag = this.$loading({ target: ".el-main" });
        // this.getAreaList();
        this.render();
    }
};
</script>

<style lang="scss" scoped>
</style>
