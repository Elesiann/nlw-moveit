import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ?
                (
                    <div className={styles.challengeActive}>
                        <header>Ganhe {activeChallenge.amount}xp!</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>
                        <footer>
                            <button
                                onClick={handleChallengeFailed}
                                className={styles.challengeFailedButton} type="button">Falhei...
                            </button>
                            <button
                                onClick={handleChallengeSucceeded}
                                className={styles.challengeSucceededButton} type="button">Completei!
                            </button>
                        </footer>
                    </div>
                ) :
                (
                    <div className={styles.challengeNotActive}>
                        <strong>Inicie um ciclo para receber um desafio!</strong>
                        <img src="icons/level-up.svg" alt="" />
                        <p>
                            Complete-os e ganhe experiência para avançar ao próximo nível. #NextLevel!
                </p>
                    </div>
                )
            }
        </div>
    )
}