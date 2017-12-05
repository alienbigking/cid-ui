<template>
    <el-aside width="260px" class="aside">
        <div class="avatar">
            <img src="../../assets/images/avatar.png" alt="">
            <div class="avatar-right">
                <span>管理员</span>
                <div class="">
                    <i class="el-icon-location-outline"></i>
                    <span>管理员</span>
                </div>
            </div>
        </div>
        <el-menu class="base" router :default-active="$route.path" unique-opened>
            <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
                <el-submenu :index="item.path" v-if="item.children && item.children.length>0" class="first">
                    <template slot="title"><i :class="item.icon"></i><span>{{item.name}}</span></template>
                    <template v-for="child in item.children">
                        <el-submenu :index="child.path" v-if="child.children && child.children.length>0" class="second">
                            <template slot="title">
                                <i :class="child.icon"></i>
                                <span>{{child.name}}</span>
                            </template>
                            <template v-for="third in child.children">
                                <el-menu-item :index="third.path" class="third">
                                    <i :class="third.icon"></i>
                                    <span>{{third.name}}</span>
                                </el-menu-item>
                            </template>
                        </el-submenu>
                        <el-menu-item :index="child.path" v-else class="second">
                            <i :class="child.icon"></i>
                            <span>{{child.name}}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
                <el-menu-item :index="item.path" v-else class="el-menu-each">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </el-aside>
</template>
<script>
export default {
    data() {
        return {
            // loginState: true
        }
    }
}
</script>
<style lang="scss" scoped>
.aside{
    background: #263238;
    color: #fff;
    .base{
        color: #d1d1d1;
        border-right: 0;
        background: #263238;
        .el-menu-item{
            color: #d1d1d1;
        }
    }
    .first{
        border-top: 1px solid #303b40;
        &.is-opened{
            background: #29B0A3;
            color: #fff;
            &>.el-submenu__title:hover{
                background: #29B0A3;
            }
        }
    }
    .second{
        background: #202a2f;
        &.is-active{
            color: #409EFF;
        }
    }
    .third{
        background: #13191c;
        &.is-active{
            color: #409EFF;
        }
    }
}
.avatar{
    display: flex;
    padding: 20px 0 20px 7px;
    align-items: stretch;
    color: #fff;
    img{
        height: 48px;
        width: 48px;
        margin-right: 16px;
    }
    .avatar-right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 12px;
        &>span{
            margin-bottom: 10px;
        }
        i{
            margin-right: 6px;
        }
    }
}
</style>
