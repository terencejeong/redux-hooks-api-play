import React, {memo} from 'react'

const CountView = memo((props: any) => (
  <div>
    {props.count}
  </div>
));

export default CountView;