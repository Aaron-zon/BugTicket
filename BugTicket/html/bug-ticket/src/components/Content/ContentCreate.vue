<template>
    <div class="test">
        <div class="main">
            <div class="content-box">
                <!-- 标题 -->
                <div class="field">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" >标题</span>
                        </div>
                        <input type="text" 
                            class="form-control" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1"
                            v-model="title">
                    </div>
                </div>
                 <!-- 项目 -->
                <div class="field">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary dropdown-toggle" 
                                type="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">项目</button>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#"
                                v-for="(value, key) in proCdList" 
                                :key=key
                                @click="proChange">{{ value }}</a>
                            </div>
                        </div>
                        <input type="text" 
                            class="form-control" 
                            aria-label="Text input with dropdown button"
                            v-model="proNm">
                    </div>
                </div>
                <!-- 机能/画面 -->
                <div class="field">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" >机能/画面</span>
                        </div>
                        <input type="text" 
                            class="form-control" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1"
                            v-model="features">
                    </div>
                </div>
                <!-- 工作类型 -->
                <div class="field">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary dropdown-toggle" 
                                type="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">工作类型</button>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Bug</a>
                            <a class="dropdown-item" href="#">变更</a>
                            </div>
                        </div>
                        <input type="text" 
                            class="form-control" 
                            aria-label="Text input with dropdown button"
                            v-model="jobType">
                    </div>
                </div>
                <!-- 优先度 -->
                <div class="field">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary dropdown-toggle" 
                                type="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">优先度</button>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">紧急</a>
                            <a class="dropdown-item" href="#">一般</a>
                            </div>
                        </div>
                        <input type="text" 
                            class="form-control" 
                            aria-label="Text input with dropdown button"
                            v-model="priority">
                    </div>
                </div>
                <!-- 分配人员 -->
                <div class="field">
                    <!-- <label>分配人员：</label>
                    <input type="text" name=""> -->
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary dropdown-toggle" 
                                type="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">分配人员</button>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">紧急</a>
                            <a class="dropdown-item" href="#">一般</a>
                            </div>
                        </div>
                        <input type="text" 
                            class="form-control" 
                            aria-label="Text input with dropdown button"
                            v-model="principal">
                    </div>
                </div>
                <!-- 添加附件 -->
                <div class="field d-none">
                    <div>添加附件</div>
                    <div>
                        <button type="button" class="btn btn-primary">文件选择</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary">追加</button>
                    </div>
                </div>
                <!-- 详细内容 -->
                <div class="field">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">详细内容</span>
                        </div>
                        <textarea class="form-control detailed-content" 
                            aria-label="With textarea"
                            v-model="detailsContent"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentCreate',
    data() {
        return {
            proCdList: {
                '00001': 'asd',
                '00002': 'qwe',
                '00003': 'zxc'
            }, 

            title: '', // 标题
            proNm: '', // 项目
            features: '', // 机能/画面
            jobType: '', // 工作类型
            priority: '', // 优先度
            principal: '', // 分配人员
            detailsContent: '' // 详细内容
        }
    },
    methods: {
        proChange(proNm) {
            console.log(proNm)
            this.proNm = proNm;
        }
    }
}
</script>
<style scoped>
.content-box {
    border: 1px solid #eee;
    padding: 80px;
    margin: 10px auto;
}
.detailed-content {
    height: 300px;
}
</style>