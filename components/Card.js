export const Card = ({ lista }) => {
    return (
        lista.map((item) => (
            <div style={{
                backgroundImage: `url(${item.capa})`
            }} class="card">
            </div>
        ))
    )
}