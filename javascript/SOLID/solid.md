# solid
 

 1. SRP 단일책인원칙

    단하나의 책임만응 가져야한다,
    ex) CRUD => 4개의 책임분리


2. OCP(개방 폐쇄 원칙)

    기존의 코드를 변겨아지않고 기능을 수정하거나 추가할수있도록 설계해야된다

    수정에는 닫혀있고 확장에는 닫혀있다,

    확장으로 기능을추가

    render관점에서본다


3. LSP(리스코프 치환 변칙)
    부모타입을 자식클래스의 인스턴스로 치환했을떄 잘 작동해야된다.
 
     
    부모 class -> 자식 extends 부모 

    부모 class === 자식 instance

 4. DIP(의존선 역전법칙)
    의존간계를 맺을 ㅒㄸ, 변화하기 쉬운것 보단 변화하기 어려운 것에 의존해야 한다는 원칙이다,
    DIP을 만족한다는 것은 의존관계를 맺을 떄, 구체적인 클래스보다 인터페이스나 추상 클래의 관계를 맺는다는 것을 의미한다






5. ISP
자신이 이용하지않는 인터페이스에 의존하지않는다.
````js
Class OPs {
    op1(){

    }
    op2(){

    }
    op3(){

    }
}

class User1{
    constructor(op:ops){

    }
    test(){
     this,op,op1());
    }
}


class User2{
    constructor(op:ops){

    }
    test(){
     this,op,op2());
    }
}

js````

