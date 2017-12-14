<template>
    <div class="card">
        <div class="um-title">
            <p>新增监区</p>
        </div>
        <el-form class="labelInTop">
            <el-form-item class="w50" label="监区名称" >
                <el-input></el-input>
            </el-form-item>
            <el-form-item class="w50" label="上级监区">
                <el-select placeholder="十二监区" v-model="prePrison">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="w100 textarea" label="监区描述">
                <el-input type="textarea" resize="none"></el-input>
            </el-form-item>
            <el-form-item class="hasButton">
                <el-button>返回</el-button>
                <el-button type="primary">新增</el-button>
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
                code: '',
                description: ''
            },
            rules: {},
            adding: false,
            prePrison: '',
            areaList: []
        };
    },
    methods: {
        ...mapActions(["getAllPrisonAreas"]),
        handleAdd(e) {
            this.$refs["formName"].validate((valid) => {
                if (valid) {
                    this.adding = true;
                    let params = _.transform(e, (result, item, key) => {
                        if (item || item === 0) result[key] = item;
                    });
                    this.addprisonHouse(params).then(res => {
                        this.adding = false;
                        this.$router.push("/prisonHouse/list");
                    });
                    // this.getAllprisonHouse(params).then(res => {
                    //     console.log(res);
                    //     // if (!res) return false;
                    //     // this.tableData = res;
                    // });
                }
            });
        },
        render() {
            this.getAllPrisonAreas().then(res => {
                // this.areaList =
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
