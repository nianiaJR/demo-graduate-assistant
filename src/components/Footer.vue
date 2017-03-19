<template lang="pug">
    .footer
        .text-wrap
            p Canvas Education. All rights reserved.
            .links
                a(href="") Site Map
                a(href="") Help Center
                a(href="") About
                a(href="") News
                a(href="") User Agreement
                a(href="") Privacy Policy
                a(href="") Community Guidelines
                a(href="") Cookie Policy
                a(href="") Copyright Policy
        .up-wrap(@click="goTop")
            icon(name="angle-up")
</template>
<script>
export default {
    methods: {
        goTop () {
            document.body.scrollTop = 0
        }
    }
}
</script>
<style lang="less">
.footer {
    display: flex;
    padding: 10px;
    background: #7f7f7f;
    color: #fff;
    align-items: center;
    > .text-wrap {
        flex: 1;
        > p {
            margin-bottom: 10px;
            font-size: 14px;
        }
        > .links {
            > a {
                display: inline-block;
                padding: 0 5px;
                color: #fff;
                text-decoration: none;
                font-size: 12px;
            }
            > a + a {
                border-left: 1px solid #fff;
            }
        }
    }
    > .up-wrap {
        cursor: pointer;
        > .fa-icon {
            width: 40px;
            height: 40px;
        }
    }
}
</style>
