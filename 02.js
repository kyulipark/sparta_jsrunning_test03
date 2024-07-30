// async await 를 사용한 코드로 변경해보기


// const API_URL = "https://open.api.com/v1/data";
// const WRONG_URL = "https://open.api.com/v1/wrong";

// function getData(url) {
//     // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요

//     return new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//             if(url === API_URL){
//                 resolve("Success");
//             }else{
//                 reject(new Error("WRONG_URL"));
//             }

//         }, 3000);
//     })
// }


async function fetchData(url) {
    try {
      const data = await getData(url);
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

//성공
  fetchData(API_URL);

//실패
fetchData(WRONG_URL);