<template>
    <div class="card">
        <div class="um-title">
            <p>新增监区</p>
        </div>
        <el-form class="formPadding" :model="area" :rules="rules" ref="formName" label-position="top">
            <el-form-item class="w50" label="监区名称" >
                <el-input v-model="area.name"></el-input>
            </el-form-item>
            <el-form-item class="w50" label="上级监区">
                <el-select v-model="area.parentPrisonArea.id" clearable :loading="getting">
                    <el-option v-for="(item, index) in areaList" :key="index" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="w100 textarea" label="监区描述">
                <el-input v-model="area.description" type="textarea" :maxlength="255" resize="none"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button @click="goBack">返 回</el-button>
                <el-button type="primary" :loading="adding" @click="handleAdd(area)">新增</el-button>
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
            area: {
                name: '',
                parentPrisonArea: { id: '' },
                description: '',
                jailId: "4090d2ba-e157-11e7-b5c5-525400c79e4e"
            },
            rules: {},
            adding: false,
            areaList: [],
            getting: true
        };
    },
    methods: {
        ...mapActions(["getAllPrisonAreasByJail", "addPrisonArea"]),
        goBack() {
           this.$router.push(`/prison-area/list`);
        },
        handleAdd(e) {
            this.$refs["formName"].validate((valid) => {
                if (valid) {
                    this.adding = true;
                    let params = _.transform(e, (result, item, key) => {
                        if (item || item === 0) result[key] = item;
                    });
                    if (!params.parentPrisonArea.id) delete params.parentPrisonArea;
                    this.addPrisonArea(params).then(res => {
                        this.adding = false;
                        this.$router.push("/prison-area/list");
                    });
                }
            });
        },
        render() {
            this.getAllPrisonAreasByJail("6d51de60-de2a-11e7-aeba-20474713e5e2").then(res => {
                this.areaList = this.$store.state.prisonArea.prisonAreas.content;
                this.getting = false;
            });
        }
    },
    created() {
        this.render();
    }
  };
</script>

<style lang="scss" scoped>
.labelInTop{
  padding-left: 20px;
  padding-top: 20px;
  .w100{
      width: 100%;
      padding-right: 20px;
  }

}

</style>
