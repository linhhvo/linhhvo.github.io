import React, {useState} from 'react';

export const AddProject = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [skill, setSkill] = useState('');
    const [skillList, setSkillList] = useState([]);
    const [code, setCode] = useState('');
    const [demo, setDemo] = useState('');
    const [report, setReport] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState(1);

    const submitHandler = event => {
        event.preventDefault();
        event.target.reset();

        const newProject = {
            name: name,
            desc: desc,
            skill: skill,
            code: code,
            demo: demo,
            report: report,
            category: category,
            priority: priority
        };

        addTransaction(newProject);
    };

    const addSkill = () => {
        let newSkillList = skillList.append(skill);
        setSkillList(newSkillList);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor='name'>
                    Name
                    <input type='text' value={name} onChange={event => setName(event.target.value)} placeholder='Enter name...' />
                </label>

                <label htmlFor='desc'>
                    Description
                    <input type='text' value={desc} onChange={event => setDesc(event.target.value)} placeholder='Enter description...' />
                </label>

                <label htmlFor='skill'>
                    Skill
                    <input type='text' value={skill} onChange={event => setSkill(event.target.value)} placeholder='Enter skill...' />
                    <button onClick={addSkill}>Add skill</button>
                </label>

                <label htmlFor='code'>
                    Source Code
                    <input type='text' value={code} onChange={event => setCode(event.target.value)} placeholder='Enter source code URL...' />
                </label>

                <label htmlFor='demo'>
                    Demo
                    <input type='text' value={demo} onChange={event => setDemo(event.target.value)} placeholder='Enter demo URL...' />
                </label>

                <label htmlFor='report'>
                    Report
                    <input type='text' value={report} onChange={event => setReport(event.target.value)} placeholder='Enter report URL...' />
                </label>

                <label htmlFor='category'>
                    Category
                    <select value={category} onChange={event => setCategory(event.target.value)}>
                        <option value="data analytics">data analytics</option>
                        <option value="full-stack">full-stack</option>
                        <option value="front-end">full-stack</option>
                    </select>
                </label>

                <label htmlFor='priority'>
                    Priority
                    <input type='number' value={priority} onChange={event => setPriority(event.target.value)} placeholder='Enter priority level...' />
                </label>

                <input type='submit' value='Add project' />
            </form>
        </div>
    );
};
