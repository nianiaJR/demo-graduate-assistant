<style lang="less" scoped>
    .dot:before {
        content: '';
        display: inline-block;
        position: relative;
        bottom: 2px;
        margin-right: 10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #000;
    }
    .university {
        width: 1000px;
        margin: 30px auto;
        background: #f2f2f2;
        > .intro {
            display: flex;
            > .logo {
                padding: 18px 30px;
                width: 150px;
                background: #fff;
            }
            > .desc {
                margin-left: 10px;
                background: #fff;
            }
            > .desc {
                flex: 1;
                > .wrap {
                    display: flex;
                    > .schools {
                        flex: 1;
                        padding: 10px 20px;
                        > h3 {
                            font-size: 34px;
                            font-weight: bolder;
                        }
                        > p {
                            color: #7f7f7f;
                            font-weight: bolder;
                            font-size: 20px;
                        }
                    }
                    > .follow {
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        > button {
                            padding: 15px 50px;
                            background: #4abdac;
                            color: #fff;
                            border: none;
                            width: 70%;
                            font-size: 34px;
                        }
                    }
                }

                > .state {
                    display: flex;
                    padding: 10px 20px;
                    > p {
                        flex: 1;
                        display: flex;
                        padding: 20px;
                        background: #ff3b3f;
                        font-size: 17px;
                        color: #fff;
                        align-items: center;
                        > .fa-icon {
                            color: #fff;
                        }
                        > a {
                            margin-left: 10px;
                            color: #fff;
                        }
                    }
                    > p + p {
                        background: #ff3b3f;
                    }
                }
            }
        }
        > .slides {
            display: flex;
            margin-top: 5px;
            cursor: pointer;
            > .rd-swipe {
                flex: 1;
                height: 300px;
                .rd-swipe-pagination-item {
                    background: #aaa;
                }
                .rd-swipe-pagination-item.active {
                    background: #fff;
                }
            }
        }

        > .stat {
            > div {
                box-shadow: 1px 1px 1px #aaa;
                background: #fff;
                > h3 {
                    padding: 5px 15px;
                    background: #fba100;
                    font-size: 24px;
                    color: #fff;
                }
            }
            > .numbers {
                > table {
                    > tr {
                        > td {
                            font-size: 20px;
                        }
                        > .blue {
                            padding: 5px 20px;
                            text-align: center;
                            font-weight: bolder;
                            color: #4671c2;
                        }
                    }
                }
            }

            > .academic {
                margin-top: 10px;
                > .icons {
                    > .fa-icon {
                        padding: 10px 20px;
                        width: 60px;
                        height: 60px;
                    }
                }
            }
            > .fun {
                margin-top: 10px;
                > .content {
                    > img {
                        float: left;
                    }
                    > p {
                        font-size: 15px;
                        transition: all 3s ease-in-out;
                    }
                }
                > .more {
                    display: flex;
                    justify-content: center;
                    background: #7f7f7f;
                    color: #fff;
                    font-size: 18px;
                    cursor: pointer;
                    > .fa-icon {
                        height: 24px;
                        width: 24px;
                    }
                    &:hover {
                        background: #afafaf;
                    }
                }
            }
            > .interviews {
                margin-top: 10px;
                > p {
                    padding: 5px 10px;
                    font-size: 15px;
                    font-weight: bold;
                }
                > .videos {
                    display: flex;
                    > iframe {
                        width: 30%;
                        height: 200px;
                    }
                    > iframe + iframe {
                        margin-left: 10px;
                    }
                    > .more-videos {
                        display: flex;
                        width: 10%;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                        > .fa-icon {
                            width: 40px;
                            height: 40px;
                        }
                        > p {
                            font-size: 20px;
                        }
                    }
                }
            }

            > .upcoming {
                margin-top: 10px;
                > .wrap {
                    display: flex;
                    font-size: 14px;
                    > .qa, > .web {
                        flex: 1;
                        display: flex;
                        > .img {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            > .fa-icon {
                                padding: 10px;
                                width: 80px;
                                height: 80px;
                                color: #186696;
                            }
                        }
                        > .desc {
                            padding: 10px;
                            > p {
                                > sup {
                                    font-size: 12px;
                                }
                            }
                            > button {
                                margin-top: 15px;
                                padding: 2px 5px;
                                background: #90a9da;
                                border: none;
                                border-radius: 5px;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template lang="pug">
.university
    .intro
        .logo
            img(src="../assets/stanford.png" width="150" height="150")
        .desc
            .wrap
                .schools
                    h3 Stanford Uniersity
                    p Palo Alto I California
                    p Private Research University
                .follow
                    button(@click="follow = 'Following'") {{follow}}
            .state
                p Canvas.com/uni/stanfordu
                p
                    icon(name="globe")
                    a(href="http://www.stanford.edu/") http://www.stanford.edu/
    .slides
        rd-swipe(:swipe="swipe")
            .rd-swipe-item(:style="{'background-image': `url(${img.url})`}" v-for="(img, index) in imgs")
    .stat
        .numbers
            h3 UNIVERSITY IN NUMBERS
            table
                tr
                    td.blue 1
                    td 
                        p National
                        p Ranking
                    td.blue 7,019
                    td
                        p Enrollment
                        p (Undergraduate)
                tr
                    td.blue 5
                    td
                        p % Admission
                        p rate
                    td.blue 46,320
                    td
                        p Tuition Fees
                tr
                    td.blue 8.2
                    td
                        p % Internation
                        p Students
                    td.blue 14:1
                    td
                        p Student Teacher
                        p ratio
        .academic
            h3 ACADEMIC STRENGTHS
            .icons 
                icon(name="desktop")
                icon(name="graduation-cap")
                icon(name="university")
        .fun
            h3 FUN FACTS
            .content
                img(src="../assets/fun.png", height="100")
                p.dot Stanford has many successful  sport steam.
                p.dot Stanfords current community of scholars.
                p.dot The unofficial name for the Stanford mascot is - The Stanford Tree. There has been a fairly selective process to choose the students who get to play the tree, since the responsibility is in high demand.Stanfordhasmanysuccessfulsportteams.Stanfordstudentshavewonmedals ineveryOlympic Games since 1908, winning 244 Olympic medals total, 129 of them gold. In the 2008 Beijing Olympic Games, Stanford won more Olympic medals than any other university in the United States.
                p.dot(v-if="isMore") Stanford has a Cactus Garden, which is a botanical garden with cactus and succulents, made for Jane and Leland Stanford and was planted between 1880-1883. Some of the original plants were restored and are surviving. Stanford’s current community of scholars includes 19 Nobel Prize laureates and 4 Pulitzer Prize winners. In addition,  Stanford is the alma mater of 30 living billionaires and 17 current astronauts.
            .more(v-if="!isMore" @click="seeMore")
                span see more
                icon(name="angle-down")
            .more(v-if="isMore" @click="seeMore")
                icon(name="angle-up")
        .interviews
            h3 INTERVIEWS
            p videos
            .videos
                iframe(src="https://www.youtube.com/embed/TfmJQ5ndktI" frameborder="0" allowfullscreen)
                iframe(src="https://www.youtube.com/embed/_UYhTylqC9o" frameborder="0" allowfullscreen)
                iframe(src="https://www.youtube.com/embed/h_MektcHgII" frameborder="0" allowfullscreen)
                .more-videos
                    icon(name="arrow-circle-o-right")
                    p see more
        .upcoming
            h3 UPCOMING EVENTS
            .wrap
                .web
                    .img
                        img(src="../assets/webinar.png" width="150" height="150")
                    .desc
                        h3 Webinar Series
                        p Stanford DNA - What our students / alumni
                        p have in common
                        h3 When
                        p 
                           span Wednesday, October 15
                           sup th
                           span , 2017
                        p 9:00am (Beijing Time)
                        button sign up
                .qa
                    .img
                        img(src="../assets/qa.png" width="150" height="150")
                    .desc
                        h3 Q&A Session
                        p Open Q&A with current Senior Student -
                        p Mei Han on life at Stanford
                        h3 When
                        p 
                            span Saturday, November 3
                            sup rd
                            span , 2017
                        p 8:30am (Beijing Time)
                        button sign up

                        
        
</template>
<script>
import rdSwipe from 'vue-slide'
export default {
    components: {
        'rd-swipe': rdSwipe
    },
    data () {
        return {
            swipe: {
                activeIndex: 0
            },
            follow: 'Follow',
            isMore: false,
            imgs: [
                {
                    url: require('../assets/school1.jpg')
                },
                {
                    url: require('../assets/school2.jpg')
                },
                {
                    url: require('../assets/school3.jpg')
                }
            ]
        }
    },
    methods: {
        switchImg (index) {
            this.swipe = {
                activeIndex: index
            }
        },
        seeMore () {
            this.isMore = !this.isMore
        }
    }
}
</script>
