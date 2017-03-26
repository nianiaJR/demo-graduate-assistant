<style lang="less">
.result {
    background: #f2f2f2;
    display: flex;
    > .search {
        margin: 30px 15px;
        padding: 10px;
        width: 200px;
        height: 400px;
        background: #fff;
        box-shadow: 1px 1px 1px #aaa;
        > ul {
            > li {
                position: relative;
                overflow: hidden;
                > select {
                    display: block;
                    margin-top: 10px;
                    padding: 10px 25px;
                    width: 200px;
                    background-color: #ed7b3c;
                    border: none;
                    color: #fff;
                    cursor: pointer;
                    outline: none;
                    -webkit-appearance: none;
                    -webkit-border-radius: 0px;
                    box-shadow: 1px 1px 1px #aaa;
                }
                > .fa-icon {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    width:  15px;
                    height: 15px;
                    color: #fff;
                }
            }
        }
        > h3 {
            margin: 20px 0 10px 0;
        }
        > p {
            font-size: 12px;
        }
        > a {
            display: block;
            margin-top: 30px;
            padding: 8px 0px;
            width: 120px;
            color: #fff;
            background-color: #792f9e;
            outline: none;
            border: none;
            box-shadow: 1px 1px 1px #aaa;
            text-align: center;
        }
    }
    > .answer {
        flex: 1;
        margin: 30px 10px 30px 0px;;
        background: #fff;
        > .see-more {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #7f7f7f;
            color: #fff;
            cursor: pointer;
            &:hover {
                background: #9f9f9f;
            }
        }
        > h4 {
            padding: 10px;
            background: #792f9e;
            color: #fff;
        } 
        > ul {
            > li {
                display: flex;
                > img {
                    width: 100px;
                    padding: 5px;
                }
                > .desc {
                    flex: 1;
                    padding: 10px 20px 20px;
                    > h4 {
                        margin-bottom: 5px;
                        font-weight: bolder;
                        font-family: monospace;
                        font-size: 18px;
                    }
                    > .btns {
                        > button {
                            display: inline-block;
                            padding: 3px 10px;
                            color: #fff;
                            border: none;
                            box-shadow: 1px 1px 1px #aaa;
                        }
                        > .green {
                            background: #558239;
                        }
                        > .purple {
                            margin-left: 10px;
                            background: #a568d0;
                        }
                    }
                    > table {
                        margin-top: 10px;
                        width: 100%;
                        td {
                            color: #4671c2;
                        }
                    }
                }
            }
        }

    }
}
</style>
<template lang="pug">
    .result
        .search
            h2 Your search
            ul
                li
                    select()
                        option(value="") Location
                        option(value="") Arizona
                        option(value="") California
                        option(value="") Colorado
                        option(value="") Connecticut
                        option(value="") Florida
                        option(value="") lllinois
                        option(value="") Massachusetts
                        option(value="") Michigan
                        option(value="") New York
                        option(value="") North Carolina
                        options(value="") Pennsylvania
                        options(value="") Rohede Island
                        options(value="") Texas
                        options(value="") Virginia
                        options(value="") Washington D.C
                        option(value="") Washington State
                    icon(name="caret-down")
                li
                    select()
                        option(value="") Acadamic Interest
                        option(value="") Architecture
                        option(value="") Arts and Design
                        option(value="") Bussiness
                        option(value="") Computer Science
                        option(value="") Economics
                        option(value="") Engineering
                        option(value="") English / Literature
                        option(value="") Entrepreneurship
                        option(value="") Health
                        option(value="") Hisotry
                        option(value="") Law / Political Science
                        option(value="") Mathematics
                        option(value="") Psychology
                        option(value="") Sciences
                        option(value="") Sciences
                        option(value="") Sociology
                        option(value="") Sports
                    icon(name="caret-down")
                li
                    select()
                        option(value="") Tuitition Fee
                        option(value="") US$20,000－$34,999 / year
                        option(value="") US$35,000－$49,999 / year
                        option(value="") Above US$50,000 / year
                    icon(name="caret-down")
                li
                    select()
                        option(value="") Culture
                        option(value="") Academic commitment
                        option(value="") Friendliness / Inclusivity
                        option(value="") International Diversity
                        option(value="") Athleticslsm / SPorts-loving
                        option(value="") Entrepreneurial
                        option(value="") Environmentally friendly
                        option(value="") Greek Life
                        option(value="") Close to the city
                        option(value="") Strong alumni network
                        option(value="") Restaurants and nightlife
                        option(value="") Number of clubs and community programs
                    icon(name="caret-down")
            h3 Item you tagged:
            p
                span California
                br
                span Science
                br
                span Entrepreneurship
                br
                span Sports
                br
                span International Diversity
                br
                span Academic Commitment
            a(href="#/result") Find
        .answer
            H4 RECOMMENDED UNIVERSITIES
            ul
                li
                    img(src="../assets/result1.png" width="100" height="100")
                    .desc
                        h4 Stanford University
                        p Palo Alto I California
                        .btns
                            button.green Learn More
                            button.purple Follow
                        table.stat
                            tr
                                th National Rangking
                                th % Admission rate
                                th Tuition Fees
                            tr
                                td #
                                td #
                                td #
                li
                    img(src="../assets/result2.png" width="100" height="100")
                    .desc
                        h4 UC Berkeley
                        p Berkeley I California
                        .btns
                            button.green Learn More
                            button.purple Follow
                        table.stat
                            tr
                                th National Rangking
                                th % Admission rate
                                th Tuition Fees
                            tr
                                td #
                                td #
                                td #

                li
                    img(src="../assets/result3.jpg" width="100" height="100")
                    .desc
                        h4 University of Southern California
                        p Los Angeles California
                        .btns
                            button.green Learn More
                            button.purple Follow
                        table.stat
                            tr
                                th National Rangking
                                th % Admission rate
                                th Tuition Fees
                            tr
                                td #
                                td #
                                td #

                li
                    img(src="../assets/result4.png" width="100" height="100")
                    .desc
                        h4 Claremont McKenna College
                        p Claremont I California
                        .btns
                            button.green Learn More
                            button.purple Follow
                        table.stat
                            tr
                                th National Rangking
                                th % Admission rate
                                th Tuition Fees
                            tr
                                td #
                                td #
                                td #

                li
                    img(src="../assets/result5.jpg" width="100" height="100")
                    .desc
                        h4 Clifornia State University
                        p Los Angeles I California
                        .btns
                            button.green Learn More
                            button.purple Follow
                        table.stat
                            tr
                                th National Rangking
                                th % Admission rate
                                th Tuition Fees
                            tr
                                td #
                                td #
                                td #
            .see-more
                span See More
                icon(name="angle-down" width="28" height="28")

</template>
<script>
</script>
