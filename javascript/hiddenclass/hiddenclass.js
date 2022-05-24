// Hidden Class
// 자바와 같은 정적 타입 언어의 경우 객체의 속성이 고정되어 있기 때문에 객체를 생성할때부터
//  메모리를 얼마나 할당해야 하는지 정확하게 파악할 수 있습니다. 따라서 객체의 속성을 저장하는
//  메모리를 연속되기 할당한 뒤 offset기반으로 빠르게 접근하여 사용할 수 있습니다.

 



// 하지만 JavaScript는 동적 타입 언어이기 때문에 객체를 생성할때에 메모리를 얼마나 할당해야 하는지 모릅니다.
//  따라서 속성이 추가될 때마다 랜덤한 주소에 메모리를 할당하고 그 속성을 다루기 위해 위해 딕셔너리랜덤한 메모리에
//   접근해야 합니다.

function Point(x, y) { // constructor this.x = x; // 
    this.x = x; // create C1 class this.y = y; // create C2 class } var p1 = new Point(1, 2);
    this.y = y;		
}
var p1 = new Point(1, 2);	

// 또한 수 많은 객체가 모두 동일한 속성들로 이루어져 있다고 하더라도 
// 그 속성들이 언제 바뀔지 모르기 때문에 위의 그림과 같은 Name-Value 쌍을 항상 유지해야 합니다.
//  이러한 방식은 JavaScript가 다른언어에 비해 느려질 수 밖에 없는 한계를 가지게 만듭니다. 
//  하지만 V8엔진에서는 이를 최적화 시키기 위해 런타임에 내부적으로 숨겨진 클래스를 만들어 사용합니다.