<style lang="less">
    .my-university {
        margin: 20px auto;
        width: 1000px;
        background: #f2f2f2;
        > .inner {
            background: #fff;
            > h3 {
                padding: 10px;
                background: #fba100;
                color: #fff;
            }
            > table {
                margin: 30px auto 0;
                width: 98%;
                > tr {
                    > th {
                        padding: 10px 0;
                        background: #ff3b3f;
                        color: #fff;
                    }
                    > td {
                        padding: 5px;
                        > img {
                            width: 64px;
                        }
                        > p {
                            > em {
                                display: inline-block;
                                font-weight: bolder;
                                margin-right: 5px;
                            }
                        }
                        > button {
                            cursor: pointer;
                            width: 20px;
                        }
                        > input {
                            margin-right: 10px;
                        }
                    }
                    > .logo, > .name {
                        cursor: pointer;
                        text-align: center;
                    }
                    &:last-child {
                        > td {
                            border-bottom: 1px solid #aaa;
                        }
                    }
                }
            }
            > .see-more {
                display: flex;
                margin-top: 10px;
                padding: 10px 0;
                color: #fff;
                background: #7f7f7f;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                &:hover {
                    background: #9f9f9f;
                }
            }
        }
        > .following {
            margin-top: 30px;
            background: #fff;
            > h3 {
                padding: 10px;
                background: #fba100;
                color: #fff;
            }
            > ul {
                display: flex;
                > li {
                    flex: 1;
                    padding: 20px;
                    text-align: center;
                    > img {
                        width: 80%;
                    }
                    > button {
                        display: inline-block;
                        margin-top: 15px;
                        color: #fff;
                        background: #4484ce;
                        border: none;
                        padding: 2px 10px;
                        border-radius: 2px;
                    }
                    > .fa-icon {
                        margin-top: 50px;
                        cursor: pointer;
                        color: #ccc;
                        &:hover {
                            color: #aaa;
                        }
                    }
                    > p {
                        color: #aaa;
                    }
                }
            }
        }
    }
</style>
<template lang="pug">
    .my-university
        .inner
            h3 UNIVERSITIES YOU ARE FOLLOWING
            table
                tr
                    th Logo
                    th University Name
                    th Important Deadlines
                    th Your Notes
                tr
                    td.logo(@click="goStanford")
                        img(src="../assets/u1.jpg")
                    td.name(@click="goStanford") Stanford University
                    td
                        p
                            em ED:
                            span December 7
                            sup th
                        p
                            em General:
                            span April 15
                            sup th
                        p
                            em Next Webinar:
                            span August 14
                            sup th
                    td
                        p Top3
                        p Beautiful campus with strong entrepreneurship programs
                        input(v-if="addIndex==0" type="text")
                        button(@click="addIndex=0") +
                tr
                    td.logo(@click="goStanford")
                        img(src="../assets/u2.jpg")
                    td.name Universit of California Berkeley
                    td
                        p
                            em ED:
                            span December 7
                            sup th
                        p
                            em General:
                            span April 15
                            sup th
                        p
                            em Next Webinar:
                            span August 13
                            sup th
                    td
                        p Mum attended, close to home
                        input(v-if="addIndex==1" type="text")
                        button(@click="addIndex=1") +
                tr
                    td.logo(@click="goStanford")
                        img(src="../assets/u3.jpg")
                    td.name Pomona College
                    td
                        p
                            em ED:
                            span December 12
                            sup th
                        p
                            em General:
                            span August 15
                            sup th
                        p
                            em Next Webinar:
                            span October 21
                            sup st
                    td
                        p Claremont consortium (I can take classes at other colleges)
                        input(v-if="addIndex==2" type="text")
                        button(@click="addIndex=2") +
                tr
                    td.logo(@click="goStanford")
                        img(src="../assets/u4.jpg")
                    td.name Princeton University
                    td
                        p
                            em ED:
                            span December 7
                            sup th
                        p
                            em General:
                            span April 15
                            sup th
                        p
                            em Next Webinar:
                            span September 3
                            sup rd
                    td
                        p Top3
                        p Visited back in 2016, amazing arts program
                        input(v-if="addIndex==3" type="text")
                        button(@click="addIndex=3") +
                tr
                    td.logo(@click="goStanford")
                        img(src="../assets/u5.jpg")
                    td.name Amherst College
                    td
                        p
                            em ED:
                            span December 12
                            sup th
                        p
                            em General:
                            span April 15
                            sup th
                        p
                            em Next Webinar:
                            span August 1
                            sup st
                    td
                        p Consortium with Wellesley and MIT
                        input(v-if="addIndex==4" type="text")
                        button(@click="addIndex=4") +
                tr
                    td.logo(@click="goStanford")
                        img(src="../assets/u6.jpg")
                    td.name Swarthmore College
                    td
                        p
                            em ED:
                            span December 12
                            sup th
                        p
                            em General:
                            span April 15
                            sup th
                        p
                            em Next Webinar:
                            span August 3
                            sup rd
                    td
                        p Safety
                        p Met representatives in Shanghai
                        input(v-if="addIndex==5" type="text")
                        button(@click="addIndex=5") +
            .see-more
                span See more
                icon(name="angle-down")

        .following
            h3 UNIVERSITIES YOUR FRIENDS ARE FOLLOWING
            ul
                li
                    img(src="../assets/u1.jpg")
                    button Learn More
                li
                    img(src="../assets/u2.jpg")
                    button Learn More
                li
                    img(src="../assets/u3.jpg")
                    button Learn More
                li
                    img(src="../assets/u4.jpg")
                    button Learn More
                li
                    img(src="../assets/u5.jpg")
                    button Learn More
                li
                    img(src="../assets/u6.jpg")
                    button Learn More
                li
                    icon(name="arrow-circle-right" width="40" height="40")
                    p See more

</template>
<script>
export default {
    data () {
        return {
            addIndex: -1
        }
    },
    methods: {
        goStanford () {
            this.$router.push('University')
        }
    }
}
</script>
