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

// 자릿수 더하기
function solution(n) {
  var a = (n + '').split('');
  var b = 0;
  for(var i = 0; i < a.length; ++i) {
      b += parseInt(a[i]);
  }
  return b;
  //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}

// 김서방 찾기
function solution(seoul) {
  let x = 0; // 김서방의 위치 (인덱스) 값을 저장
 
  for( let i = 0; i < seoul.length; i++ ) {
      if( seoul[i] === "Kim" ) {
          x = i;
          break;
      }
  }

 return `김서방은 ${x}에 있다`
}

// 가운데 글자 가져오기
function solution(s) {
  let center = Math.floor( s.length / 2 )
  let answer = s[center]
  
  if(s.length % 2 === 0) {
    answer = s[center - 1] + answer
  }
  return answer
}


// 약수의 합
function solution(n) {
  let answer = 0;
  
  for( let i = 1; i <= n; i++ ) {
      if( n % i === 0 ) {
          answer += i;
      }
  }
  
  return answer;
}

// 자연수 뒤집어 배열로 만들기
function solution(n) {
  const answer = [];
  n = String(n);

  for( let i = 0; i < n.length; i++ ) {
      answer.push( Number(n[i]) )
  }
  answer.reverse();
  
  return answer;
}

// 핸드폰 번호 가리기
function solution(phone_number) {
    
  let result = ""
  
  result = result.padStart( phone_number.length - 4, "*" );
  result += phone_number.slice( phone_number.length - 4 );
  
  return result
}

// 문자열 내 p와 y의 개수
function solution(s) {
  s = s.toLowerCase()
  let p = 0
  let y = 0

  for(let i = 0; i < s.length; i++) {
    if(s[i] === 'y') {
      y++
    } else if(s[i] === 'p') {
      p++
    }
  }
  return p === y
}