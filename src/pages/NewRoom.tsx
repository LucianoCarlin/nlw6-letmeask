import { FormEvent, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';



export function NewRoom(){
	const { user } = useAuth();
	const history = useHistory();
	const [newRoom, setNewRoom] = useState('');

	async function handleCreateRoom(event: FormEvent) {
		event.preventDefault();

		if (newRoom.trim() === '') {
			return;
		}

		const roomRef = database.ref('rooms');

		const firebaseRoom = await roomRef.push({
			title: newRoom,
			authorId: user?.id,
			authorName: user?.name,

		})

		history.push(`/rooms/${firebaseRoom.key}`)
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
                    <h2>Criar uma nova sala</h2>
					<Form onSubmit={handleCreateRoom}>
						<input
							type="text"
							placeholder="Nome da sala"
							onChange={event => setNewRoom(event.target.value)}
							value={newRoom}
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