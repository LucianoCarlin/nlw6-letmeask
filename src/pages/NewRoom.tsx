import { Link } from 'react-router-dom';

import { Form } from 'react-bootstrap';
import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
//import { useContext } from 'react';
//import { AuthContext } from '../contexts/AuthContext';


export function NewRoom(){
	//const {user} = useContext(AuthContext);


	return(
		<div id="page-auth">
			<aside>
				<img src={illustration} alt="Perguntas e respostas"></img>
				<strong>Crie salas de Q&amp;A ao-vivo</strong>
				<p>Tire dúvidas da sua audiência em tempo-real</p>
			</aside>
			<main>
                
				<div className="main-content">
					<img src={logoImg} alt="Letmeask"></img>
                    <h2>Criar uma nova sala</h2>
					<Form>
						<input
							type="text"
							placeholder="Nome da sala"
						/>
						<Button type="submit">
							Criar sala
						</Button>
					</Form>
                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <p>Quer entrar em uma sala existente?</p> <Link className="a" to="/">Clique aqui</Link>
				</div>
			</main>
		</div>
    )
}