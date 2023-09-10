'use client'

import { useState } from "react";
import Porta from "../../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../../functions/portas";
import styles from '../../../../styles/Jogo.module.css'
import Link from 'next/link'

export default function Home({ params }) {

    const [portas, setPortas] = useState(criarPortas(+params?.portas, +params?.temPresente))

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
            />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar jogo!</button>
                </Link>
            </div>
        </div>
    )
}
