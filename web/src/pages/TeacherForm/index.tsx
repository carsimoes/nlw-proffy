import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm(){
const [scheduleItems] = useState([
    { week_day: 0, from: '8:00 AM', to: '4:00 PM'},
    { week_day: 2, from: '10:00 AM', to: '6:00 PM'},
]);

function addNewScheduleItem() {
    scheduleItems.push({
        week_day: 0,
        from:'',
        to:''
    });
}

    return (

        <div id="page-teacher-form" className="container" >
            <PageHeader title="Que incrível que você quer dar aulas."
            description=
            "O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject" label="Matéria" 
                    options={[
                        {value:'Artes', label: 'Artes'},
                        {value:'Ciências', label: 'Ciências'},
                        {value:'Matemática', label: 'Matemática'}
                    ]} />
                    <Input name="cost" label="Custo hora aula" />

                </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                            + novo horário
                            </button>
                        </legend>
                       
                        {scheduleItems.map(scheduleItem =>{
                            return (
                            <div 
                            key={scheduleItem.week_day}
                            className="schedule-item">
                            <Select 
                                name="week_day" label="Dia da semana" 
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
                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>)
                        })}
                    </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>

    )
}

export default TeacherForm;