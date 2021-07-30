import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'


export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown } = useContext(CountdownContext)

    /**
     * Verifies if there are two numbers at the moment, if not, will ad a zero before the number and split it (.split)
     */
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')



    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={`${styles.countdownButton}`}
                >
                    Ciclo encerrado!
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button
                                onClick={resetCountdown}
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            >
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    onClick={startCountdown}
                                    type="button"
                                    className={styles.countdownButton}
                                >
                                    Iniciar ciclo
                                </button>
                            )
                        }
                    </>
                )}
        </div>
    )
}