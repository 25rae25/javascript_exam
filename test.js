// 평균값구하기 reduce 사용
function solution(numbers) {
	return numbers.reduce((a, c) => a + c, 0) / numbers.length;
  }

// 피자 나눠 먹기
function solution(slice, n) {
    let man = Math.ceil(n / slice)
    console.log(man)
        return man;
}

// 중복된 숫자 개수
function solution(array, n) {
	return array.filter(a => a === n).length;
  }

// 점의 위치 구하기
function solution(dot) {
	if(dot[0] > 0 && dot[1] > 0) {
		return 1
	} else if(dot[0] < 0 && dot[1] > 0) {
		return 2
	} else if(dot[0] < 0 && dot[1] < 0) {
		return 3
	} else if(dot[0] > 0 && dot[1] < 0) {
		return 4
	}
  }

// 배열 원소의 길이
function solution(strlist) {
	// let result = 0
	// let aaa = []
	// for(let i = 0; i < strlist.length; i++) {
	//     result = strlist[i].length
	//     console.log(result)
	// }
	  return strlist.map(s => s.length);
  }

// 피자 나눠먹기 (1)
function solution(n) {
	return Math.floor((n - 1) / 7) + 1;
}