<template>
    <div >
        <div class="topic">
            <h6>我的任务</h6>
            <table class="table table-sm table-hover text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">编号</th>
                        <th scope="col">课题标题</th>
                        <th scope="col">项目</th>
                        <th scope="col">状态</th>
                        <th scope="col">权重</th>
                        <th scope="col">开始日期</th>
                        <th scope="col">结束日期</th>
                    </tr>
                </thead>
                <tbody >
                    <tr class="cursor-pointer" v-for="(val, key) in topicData" :key="key" @click="edit(val)">
                        <th scope="row">{{ key + 1 }}</th>
                        <td>{{ val.code }}</td>
                        <td>{{ val.title }}</td>
                        <td>{{ val.pro }}</td>
                        <td>{{ val.status }}</td>
                        <td>{{ val.grade }}</td>
                        <td>{{ val.dateStart }}</td>
                        <td>{{ val.dateEnd }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div></div>
       
    </div>
</template>

<script>
export default {
    name: 'ContentDefult',
    data() {
        return {
            topicData: [],
        }
    },
    created() {
        // http

        // test
        this.topicData = [
            {
                code: 'CD-1', // 编号
                title: '配1111111111', // 标题
                pro: 'CD', // 项目
                status: '完成', // 状态
                grade: '1', // 权重
                dateStart: '2021/01/08', // 开始日期
                dateEnd: '2021/02/08' // 结束日期
            },
            {
                code: 'CD-2', // 编号
                title: '配2', // 标题
                pro: 'CD', // 项目
                status: '完成', // 状态
                grade: '1', // 权重
                dateStart: '2021/01/08', // 开始日期
                dateEnd: '2021/02/08' // 结束日期
            }
        ]
    },
    methods: {
        edit(val) {
            this.$router.push({ name:'contentEdit',params: {
                info: val
            } });
        }
    }
}
</script>