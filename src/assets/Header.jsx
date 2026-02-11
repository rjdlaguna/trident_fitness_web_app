import '../assets/Header.css';
export default function Header() {
    const content = [
        {
            id: 1,
            label: 'Home',
            link: '/'
        },
        {
            id: 2,
            label: 'Workouts',
            link: '/'
        },
        {
            id: 3,
            label: 'Trainers',
            link: '/'
        },
                {
            id: 4,
            label: 'Contact',
            link: '/'
        },
                {
            id: 5,
            label: 'About',
            link: '/'
        },
    ]

    return(
        <>
            <header className='menu-header'>
                <div className='menu-content'>
                    <ul>
                        {content.map((item) => (
                            <li key={item.id}>{item.label.toUpperCase()}</li>
                        ))}
                    </ul>
                </div>
            </header>
        </>   
    )
}