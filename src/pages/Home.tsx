import { useHistory } from 'react-router-dom';

import { Form } from 'react-bootstrap';
import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';



import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export function Home(){

	const history = useHistory();
	const { user, signInWithGoogle } = useContext(AuthContext)

	async function handleCreateRoom(){
		if (!user) {
			await signInWithGoogle()
		}

		history.push('/rooms/new');		
	}

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
					<button onClick={handleCreateRoom} className="create-room">
						<img src={googleIconImg} alt="Logo do Google"></img>
						Crie sua sala com Google	
					</button>
					<div className="separator">ou entre em uma sala</div>
					<Form>
						<input
							type="text"
							placeholder="Dígite o código da sala"
						/>
						<Button type="submit">
							Entrar na sala
						</Button>
					</Form>
				</div>
			</main>
		</div>
    )
}