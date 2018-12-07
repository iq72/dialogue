import React from 'react'
import {Formik, Field, Form} from 'formik'
import {InputNumber,DatePicker,Input, Radio, Select, Checkbox, Col} from 'antd'

const RadioGroup=Radio.Group
const InputGroup = Input.Group
const Option = Select.Option
const shopkeepers=[
    <Option key={0}>冯小兵</Option>,
    <Option key={1}>胥雨</Option>,
    <Option key={2}>临促</Option>
]


const CustomerForm = ()=>{
return(
    <Formik 
    render={()=>
    (<Form>
        <fieldset>
            <legend>基本信息</legend>
            <InputGroup >
            <Col span={8}>
                <label>编号：
                <Input name='sn' placeholder='编号'/>
                </label>
            </Col>
            <Col span={5}>
                <label>在店时长： 
                <InputNumber name='timeLast' min={0} max={600} defaultValue={10} step={10} formatter={value => `${value}分钟`}/>
                </label>
            </Col>
            </InputGroup>
            <br></br>
            <br></br>
            <InputGroup compact>
            <Radio.Group buttonStyle='solid'>
                <Radio.Button>首次到店</Radio.Button>
            </Radio.Group>
            
            <label>
                <Input addonBefore='当日到店次数' min={1} max={5} defaultValue={1} />
            </label>
            </InputGroup>
            <br/>
            <br />
            <label>导购
                <Select compact
                    mode='tags' 
                    placeholder='可以选择多人'
                    >{shopkeepers}</Select>

            </label>
            
        </fieldset>
        <br></br>
        <fieldset>
            <legend>用户信息</legend>
            <div>主要决策人 <br />
            <label>姓名：
                <Input type='text' name='customerMain'/>
            </label>
            <label>性别：
            <RadioGroup buttonStyle='solid'>
                    <Radio.Button name='gender' value='male'> 男 </Radio.Button>
                    <Radio.Button name='gender' value='female'> 女 </Radio.Button>
            </RadioGroup>
            </label>
            <br/>
            <label>年龄段
                <Input type='text' name='shopkeepers'/>
            </label>
            </div>
            <div>同行人员
            <label>关系
                <Field type='text' name='shopkeepers'/>
                <Field type='button' value="添加"></Field>
            </label>
            </div>
            <div>经济水平<br />
            <RadioGroup>
            <label>
                <Radio name='richOpoor' value='veryPoor'/>非常拮据
            </label>
            <label>
                <Radio name='richOpoor' value='poor'/>有点拮据
            </label>
            <label>
                <Radio name='richOpoor' value='middle'/>一般
            </label>
            <label>
                <Radio name='richOpoor' value='rich'/>有点富裕
            </label>
            <label>
                <Radio name='richOpoor' value='veryRich'/>非常富裕
            </label>
            </RadioGroup>
            </div>
            <div>预算严格程度<br />
            <RadioGroup>
            <label>
                <Radio name='budget' value='tight'/>严格（500以内）
            </label>
            <label>
                <Radio name='budget' value='middle'/>一般（1000以内)
            </label>
            <label>
                <Radio name='budget' value='loose'/>宽松（1000以上）
            </label>
            </RadioGroup>
            </div>
            <div>时间紧迫性<br />
            <RadioGroup>
            <label>
                <Radio name='urgency' value='urgency'/>今天就买（定）
            </label>
            <label>
                <Radio name='urgency' value='middle'/>这几天就买（定）
            </label>
            <label>
                <Radio name='urgency' value='causal'/>不着急买
            </label>
            </RadioGroup>
            </div>
            <div>需求触发
            <label>
                <Radio name='richOpoor' value='rich'/>富裕
            </label>
            <label>
                <Radio name='richOpoor' value='middle'/>一般
            </label>
            <label>
                <Radio name='richOpoor' value='poor'/>贫穷
            </label>
            </div>
            <div>使用者
            <label>
                <Radio name='budget' value='rich'/>富裕
            </label>
            <label>
                <Radio name='budget' value='middle'/>一般
            </label>
            <label>
                <Radio name='budget' value='poor'/>贫穷
            </label>
            </div>
            <div>使用空间
            <label>
                <Radio name='urgency' value='rich'/>富裕
            </label>
            <label>
                <Radio name='urgency' value='middle'/>一般
            </label>
            <label>
                <Radio name='urgency' value='poor'/>贫穷
            </label>
            </div>
            <div>联系方式</div>
            <div>送货时间、价格</div>
        </fieldset>
        <fieldset>
            <legend>产品信息</legend>
            
            <div>购买情况<br></br>
            <RadioGroup>
            <label>
                <Radio name='purchased' value='ed'/>已购
            </label>
            <label>
                <Radio name='purchased' value='pre'/>预定
            </label>
            <label>
                <Radio name='purchased' value='no'/>未购
            </label>
            </RadioGroup>
            </div>
            
            <div>关注过的产品
            <label>
                <Input type='text' name='looked'/>
            </label>
            </div>
            <div>对比过的品牌
            <label>
                <Input type='text' name='otherBrands' />
            </label>
            </div>
            <div>安装方式<br />
            <RadioGroup>
            <label>
                <Radio name='hang' value='hang'/>挂
            </label>
            <label>
                <Radio name='hang' value='sit'/>座
            </label>
            </RadioGroup>
            </div>
            <div>安装日期<br />
            <DatePicker />
            </div>
        </fieldset>
        
    </Form>)}
    />
)
}
export default CustomerForm