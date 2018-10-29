import React from 'react'
import {Formik, Field, Form} from 'formik'



const CustomerForm = ()=>{
return(
    <Formik 
    render={()=>
    (<Form>
        <fieldset>
            <legend>基本信息</legend>
            <label>编号
                <Field type='text' name='sN'/>
            </label>
            <label>时长
                <Field type='text' name='timeLast'/>
            </label>
            <label>
                <Field type='checkbox' name='firstTime'/>首次到店
            </label>
            <label>当日到店次数
                <Field type='range' min='0' max='5' name='timesEntered'/>
            </label>
            <label>导购
                <Field type='text' name='shopkeepers'/>
            </label>
        </fieldset>
        <fieldset>
            <legend>用户信息</legend>
            <div>主要决策人 <br />
            <label>姓名
                <Field type='text' name='customerMain'/>
            </label>
            <label>
                <Field type='radio' name='gender' value='male'/>男
            </label>
            <label>
                <Field type='radio' name='gender' value='female' />女
            </label>
            <label>年龄段
                <Field type='text' name='shopkeepers'/>
            </label>
            </div>
            <div>同行人员
            <label>关系
                <Field type='text' name='shopkeepers'/>
                <Field type='button' value="添加"></Field>
            </label>
            </div>
            <div>经济水平<br />
            <label>
                <Field type='radio' name='richOpoor' value='veryPoor'/>非常拮据
            </label>
            <label>
                <Field type='radio' name='richOpoor' value='poor'/>有点拮据
            </label>
            <label>
                <Field type='radio' name='richOpoor' value='middle'/>一般
            </label>
            <label>
                <Field type='radio' name='richOpoor' value='rich'/>有点富裕
            </label>
            <label>
                <Field type='radio' name='richOpoor' value='veryRich'/>非常富裕
            </label>
            </div>
            <div>预算严格程度<br />
            <label>
                <Field type='radio' name='budget' value='tight'/>严格（500以内）
            </label>
            <label>
                <Field type='radio' name='budget' value='middle'/>一般（1000以内)
            </label>
            <label>
                <Field type='radio' name='budget' value='loose'/>宽松（1000以上）
            </label>
            </div>
            <div>时间紧迫性<br />
            <label>
                <Field type='radio' name='urgency' value='urgency'/>今天就买（定）
            </label>
            <label>
                <Field type='radio' name='urgency' value='middle'/>这几天就买（定）
            </label>
            <label>
                <Field type='radio' name='urgency' value='causal'/>不着急买
            </label>
            </div>
            <div>需求触发
            <label>
                <Field type='radio' name='richOpoor' value='rich'/>富裕
            </label>
            <label>
                <Field type='radio' name='richOpoor' value='middle'/>一般
            </label>
            <label>
                <Field type='radio' name='richOpoor' value='poor'/>贫穷
            </label>
            </div>
            <div>使用者
            <label>
                <Field type='radio' name='budget' value='rich'/>富裕
            </label>
            <label>
                <Field type='radio' name='budget' value='middle'/>一般
            </label>
            <label>
                <Field type='radio' name='budget' value='poor'/>贫穷
            </label>
            </div>
            <div>使用空间
            <label>
                <Field type='radio' name='urgency' value='rich'/>富裕
            </label>
            <label>
                <Field type='radio' name='urgency' value='middle'/>一般
            </label>
            <label>
                <Field type='radio' name='urgency' value='poor'/>贫穷
            </label>
            </div>
        </fieldset>
        <fieldset>
            <legend>产品信息</legend>
            <div>安装方式<br />
            <label>
                <Field type='radio' name='hang' value='hang'/>挂
            </label>
            <label>
                <Field type='radio' name='hang' value='sit'/>座
            </label>
            </div>
            <div>购买情况
            <label>
                <Field type='radio' name='purchased' value='ed'/>已购
            </label>
            <label>
                <Field type='radio' name='purchased' value='pre'/>预定
            </label>
            <label>
                <Field type='radio' name='purchased' value='no'/>未购
            </label>
            </div>
            <div>关注过的产品
            <label>
                <Field type='text' name='looked'/>
            </label>
            </div>
            <div>对比过的品牌
            <label>
                <Field type='text' name='otherBrands' />
            </label>
            </div>
        </fieldset>
        
    </Form>)}
    />
)
}
export default CustomerForm