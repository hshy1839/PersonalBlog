const quotes = [
    {
        quote: "\"창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.\"",
        author: "Unknown",
    },
    {
        quote: "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
        author : "짐 론",
    },
    {
        quote: "추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.",
        author: "월트 디즈니",
    },
    {
        quote: " \"열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.\"",
        author : "윈스턴 처칠",
    },
    {
        quote: "\"성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.\"",
        author: "알버트 아인슈타인",
    },
    {
        quote: "\"위대한 정신을 가진 사람들은 생각을 논한다. 평범한 사람들은 사건을 논한다.\" 마음이 좁은 사람들은 사람들을 논한다.",
        author : "엘리너 루즈벨트",
    },
    {
        quote: "\"나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.\"",
        author: "토마스 에디슨",
    },
    {
        quote: "\"당신이 자신의 시간을 가치있게 생각하지 않으면 남들도 마찬가지일 것이다. 시간과 재능을 막 나눠주지 말고 팔아라.\"",
        author : "킴 가스트",
    },
    {
        quote: "\"당신이 허락해주지 않으면 아무도 당신이 열등감을 느끼게 만들 수 없다.\"",
        author: "엘리너 루즈벨트",
    },
    {
        quote: "\"지옥을 겪고 있다면 계속 겪어 나가라.\"",
        author : "윈스턴 처칠",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


