import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';


function TeacherList(){
    return (

        <div id="page-teacher-list" className="container" >
             <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />

                    <Input name="week_day" label="Dia da semana" />

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
