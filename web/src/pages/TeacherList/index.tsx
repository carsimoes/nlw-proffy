import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';


function TeacherList(){
    return (

        <div id="page-teacher-list" className="container" >
             <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    
                    <Select name="subject" label="Matéria" 
                    options={[
                        {value:'Artes', label: 'Artes'},
                        {value:'Ciências', label: 'Ciências'},
                        {value:'Matemática', label: 'Matemática'}
                    ]} 
                    />
                    <Select name="week_day" label="Dia da semana" 
                    options={[
                        {value:'0', label: 'Domingo'},
                        {value:'1', label: 'Segunda'},
                        {value:'2', label: 'Terça'},
                        {value:'3', label: 'Quarta'},
                        {value:'4', label: 'Quinta'},
                        {value:'5', label: 'Sexta'},
                        {value:'6', label: 'Sábado'}
                    ]} 
                    />
                    <Input name="time" label="Hora" type="time"/>

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>

    )
}

export default TeacherList;
