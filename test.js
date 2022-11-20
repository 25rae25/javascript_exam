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

// 세 수 중 최솟값
function solution(a, b, c) {
  let answer
  if(a < b) answer = a
  else answer = b
  if(c < answer) answer = c
  
  return answer
}

// 옷가게 할인 받기
function solution(price) {
  if(price >= 500000) return Math.floor(price * 0.8)
  if(price >= 300000) return Math.floor(price * 0.9)
  if(price >= 100000) return Math.floor(price * 0.95)
  
  return price
}

// 키패드 누르기
const leftNumbers = [1, 4, 7] // 왼쪽 키패드에 해당하는 숫자를 배치
const rightNumbers = [3, 6, 9] // 오른쪽 키패드에 해당하는 숫자를 배치

function solution(numbers, hand) {
    let answer = "";
    
    // 현재 두 엄지손가락이 어떤 위치에 있는지
    const current = {
        left : 10,
        right : 12
    }
    
    for( let i = 0; i < numbers.length; i++ ) {
        if( leftNumbers.includes( numbers[i] ) ) {
            // 누를 번호가 왼쪽 키패드에 해당된다면 ( = 왼쪽 손가락으로 누른다. )
            answer += "L";
            current["left"] = numbers[i]; // 왼쪽 손가락의 위치를 변경
            
        } else if( rightNumbers.includes( numbers[i] ) ) {
            // 누를 번호가 오른쪽 키패드에 해당된다면 ( = 오른쪽 손가락으로 누른다. )
            answer += "R";
            current["right"] = numbers[i]; // 오른쪽 손가락의 위치를 변경
            
        } else {
            // 가운데 키패드에 해당할 경우
            const locationObj = { ...current }; // 왼쪽과 오른쪽의 손가락의 위치 거리를 저장
            
            for( let hand in locationObj ) {
                // 0번을 눌렀을 때의 예외 처리 = 0번은 11 위치값으로 처리한다.
                numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
                // 왼쪽과 오른쪽 엄지손가락으로부터 거리값을 구해온다.
                let location = Math.abs(numbers[i] - locationObj[ hand ]);
                
                // 거리 차이가 3칸 이상일 때는 위 아래로 이동할 수 있다.
                if( location >= 3 ) {
                    location = Math.trunc(location / 3) + location % 3
                }
                locationObj[ hand ] = location;
            }
            
            // 왼쪽 손가락의 위치와 오른쪽 손가락의 위치가 서로 동일할 경우
            // 주로 사용하는 손가락(hand 매개변수)을 이용해서 누른다.
            if( locationObj["left"] === locationObj["right"] ) {
                answer += hand === "left" ? "L" : "R";
                current[ hand ] = numbers[i];
                
            } else {
                if( locationObj["left"] > locationObj["right"] ) {
                    // 오른쪽 손가락이 더 가까운 경우
                    answer += "R";
                    current[ "right" ] = numbers[i];
                    
                } else {
                    // 왼쪽 손가락이 더 가까운 경우
                    answer += "L";
                    current[ "left" ] = numbers[i];
                }
            }
        }
    }
    return answer;
}

// 연필 개수
function solution(n) {
  let answer = Math.ceil(n/12)
  return answer
}

// 1부터 N까지 합 출력하기
function solution(n) {
  let answer = 0
  for(let i = 1; i <= n; i++) {
    answer = answer + i
  }
  return answer
}

// 2016년
const month = {
  1 : 31,
  2 : 29,
  3 : 31,
  4 : 30,
  5 : 31,
  6 : 30,
  7 : 31,
  8 : 31,
  9 : 30,
  10 : 31,
  11 : 30,
  12 : 31
}
const week = [ 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU' ];

function solution(a, b) {
  // 총 일수를 저장하는 변수
  let answer = 0;
  
  for( let i = 1; i < a; i++ ) {
      answer += month[i];
  }
  answer += (b - 1);
  answer = week[ days % 7 ]
  
  return answer;
}

// 음양 더하기
function solution(absolutes, signs) {
  let answer = 0;
  for( let i = 0; i < absolutes.length; i++ ) {
      answer += signs[i] ? absolutes[i] : -absolutes[i] 
  }
  
  return answer;
}

// 폰켓몬
function solution(nums) {
    const answer = []
    
    for( let i = 0; i < nums.length; i++ ) {
        if( 
            (nums.length / 2) !== answer.length  &&
            answer.includes( nums[i] ) === false
          ) {
            answer.push( nums[i] )
        }
    }
    return answer.length
}

// 문자열 뒤집기
function solution(my_string) {
  return my_string.split('').reverse().join('')
}

// 예산
function solution(d, budget) {
  const answer = [];
  
  // 모든 부서가 신청한 지원금에 따라 오름차순
  d.sort( (a, b) => a - b );
  
  // 부서들이 신청한 금액의 총 합
  let sum = 0;
  for( let i = 0; i < d.length; i++ ) {
      sum += d[i];
      
      if( sum <= budget ) {
          answer.push( d[i] );
      }
  }
  return answer.length;
}
