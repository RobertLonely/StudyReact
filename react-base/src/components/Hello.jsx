import React from 'react'

export default function Hello(props) {
  return (
    <div>
      姓名:{props.name},年龄:{props.age},性别:{props.gender}
    </div>
  );
}