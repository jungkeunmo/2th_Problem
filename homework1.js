// 1. 딕셔너리(제이슨) 데이터 타입으로 아이스 아메리카노 에 2000,
// 카페 라떼에 2300, 카푸치노에 3000을 저장하세요.
// (key는 커피 이름이며, value는 정수형 데이터로 금액 입니다.)
// 딕셔너리 이름은 menus로 합니다.

const menus = {
    iceamericano: 2000,
    cafelatte: 2300,
    capuchino: 3000,
};

// 1-1. menus를 출력하세요.
console.log(menus);
// 1-2. menus의 카푸치노가 가지고 있는 금액을 출력하세요.
console.log(menus.capuchino);

// 2. 변수 p1과 p2를 선언하고, 각각 "10"과 10을 저장합니다.
// p1과 p2가 일치하는 데이터라면 "일치합니다." 라고 출력하고
// 일치하지 않다면 "일치한지 않습니다" 라고 출력하세요.

const p1 = "10"
const p2 = 10;

if (p1 === p2) {
    console.log("일치합니다.");
} else {
    console.log("일치하지 않습니다.");
};

// 변수 a1에는 40을 저장하고, 변수 a2에는 41을 저장하세요.
// 만약 a1이 a2보다 크다면, "a1이 더 큰 수 입니다" 라고 출력하고
// a2가 더 크다면 "a2가 더 큰 수 입니다" 라고 출력하세요.
// 단, a1과 a2의 크기를 비교할 수 없다면 "비교할 수 없습니다." 라고 출력하세요.
const a1 = 40;
const a2 = 41;

if (a1 > a2) {
    console.log("a1이 더 큰 수 입니다.");
} else if (a1 > a2) {
    console.log("a2가 더 큰 수 입니다.");
} else {
    console.log("비교할 수 없습니다.");
};

// 4. 딕셔너리(제이슨) 타입 데이터에 
// 이름은 라이언, 성별은 남성, 색상은 브라운
// 이름은 무지, 성별은 남성, 색상은 화이트
// 이름은 어피치, 성별은 여성, 색상은 핑크 
// 이름은 콘, 성별은 남성, 색상은 그린
// 의 데이터를 배열로 저장한 뒤,
// 반복문을 사용하여 모든 데이터의 이름과 성별만 출력하세요.

const kakaos = [
    {
        name: "라이언",
        gender: "남성",
        color: "브라운",
    },
    {
        name: "무지",
        gender: "남성",
        color: "화이트",
    },
    {
        name: "어피치",
        gender: "여성",
        color: "핑크",
    },
    {
        name: "콘",
        gender: "남성",
        color: "그린",
    },
];

kakaos.forEach((k) => {
    console.log(k.name);
    console.log(k.gender);
    console.log("-------------");
});