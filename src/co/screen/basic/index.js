import s from './index.module.styl'
import React from 'react'

export default ({ className, children })=>(
    <div id='markup' className={s.page + ' ' + className}>
        {children}
    </div>
)