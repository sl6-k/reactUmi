import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    // routes: [
    //   { path: '/', component: '@/pages/index' },
    // ],
    fastRefresh: {},
    // plugins: [
    //     [
    //         'umi-plugin-react',
    //         {
    //             antd: true,
    //         }
    //     ]
    // ]
});