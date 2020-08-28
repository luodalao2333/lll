//引入包
import VueRouter from 'vue-router'

import first from '../../components/first.vue'
import a from '../../components/a.vue'
import b from '../../components/b.vue'
import c from '../../components/c.vue'
import d from '../../components/d.vue'
import e from '../../components/e.vue'
import shoe from '../../components/shoe.vue'
import test from '../../components/test.vue'
import search from '../../components/search.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:'/a',
                    component:a
                }
            ],
            redirect:'/a'
        },
        {
            path:'/b',
            component:b
        },
        {
            path:'/c',
            component:c
        },
        {
            path:'/d',
            component:d
        },
        {
            path:'/e',
            component:e
        },
        {
            path:'/shoe',
            component:shoe
        },
        {
            path:'/test',
            component:test
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/*',
            redirect:'/a'
        },
    ]
})