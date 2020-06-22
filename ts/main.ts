'use strict';

{
  let hello = function (name: string, age: number): void {
    console.log('Hello, ' + name + '(' + age + ')');
  }

  let name: string = "Taro";
  let age: number = 25;

  hello(name, age);
}

{
  const person: any = {
    name: ['Taro', 'Jiro', 'Subro'],
    birth: 1994,
    interests: {
      sports: 'football',
      music: 'rock',
    },
    getAllName: function(): void {
      for(let i of this.name) {
        console.log(i, this.name[i])
      }
    }
  };

  console.log(person.birth);
  person.getAllName();
}

{
  const todos: any[] = [
    {
      id: 1,
      title: 'working',
      completed: true,
    },
    {
      id: 2,
      title: 'study',
      completed: false,
    },
    {
      id: 3,
      title: 'shopping',
      completed: true,
    }
  ];

  for(let i in todos) {
    let todo = todos[i];
    if(todo.completed === true) {
      console.log(todo.id, todo.title);
    }
  }
}

{
  let hello = function(callback: any): void {
    console.log('hello ' + callback());
  }

  let getName = function (): string {
    return 'Ichiro';
  }

  hello(getName);
}

{
  const arry: string[] = ['Ichiro', 'Suzuki', 'Toyota', 'Nissan'];

  arry.forEach(function(val, i, ary) {
    console.log(val);
  });
}

{
  const arry: number[] = [1,2,3,4,5];

  arry.reduce(function(accu: number, curr: number): number {
    console.log(accu, curr);
    return accu + curr;
  });

  const str: string = 'animation'
  const strArry: string[] = str.split('');

  console.log(strArry);

  const result: string = strArry.reduce((accu: string, curr: string): string => {
    return `${accu}<${curr}>`;
  }, '');

  console.log(result);
}

{
  const str: string = 'animation';
  const strArry: string[] = str.split('');

  let tag = function(accu: string, curr: string): string {
    return `${accu}<${curr}>`
  }

  let reduce = function(arry: string[], callback: any, defaultValue: string): string {
    let accu: string = defaultValue;

    for(let i: number = 0; i < arry.length; i++) {
      let curr: string = arry[i];
      accu = callback(accu, curr);
    }

    return accu
  }

  const result: string = reduce(strArry, tag, "");
  console.log(result);
}