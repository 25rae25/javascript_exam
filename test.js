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

// 문자열안에 문자열
function solution(str1, str2) {
    if(str1.includes(str2)) {
        return 1
    } else {
        return 2
    }
}
// 삼항연상자 방법
function solution(str1, str2) {
	return str1.includes(str2) ? 1 : 2;
  }

// 짝수는 싫어요
function solution(n) {
    var answer = [];
    for(let i = 1; i<= n; i++)
        if(i % 2=== 1) answer.push(i);
    return answer;
}

// 짝수와 홀수
function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd"
}

// 평균 구하기
function solution(arr) {
    let result = 0
    let num = arr.length
    for(let i = 0; i < arr.length; i++) {
        result += arr[i] / num
    }
    return result
}