import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{ 
            backgroundColor: '#0F1A3C', // Midnight blue from "Blue Eclipse" [2]
            padding: '1rem 2rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <ul style={{ 
                listStyle: 'none',
                display: 'flex',
                gap: '2.5rem',
                margin: 0,
                padding: 0,
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <li>
                    <Link 
                        to={'/'} 
                        style={{ 
                            textDecoration: 'none',
                            color: '#F8F8F9', // White lilac from [5]
                            fontWeight: '500',
                            fontSize: '1.1rem',
                            padding: '0.75rem 1.25rem',
                            borderRadius: '4px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderBottom: '2px solid transparent',
                            ':hover': {
                                color: '#C7AF6B', // Gold from "Classic Red Gold" [4]
                                borderBottom: '2px solid #C7AF6B'
                            },
                            '&.active': {
                                borderBottom: '2px solid #C7AF6B'
                            }
                        }}
                    >
                        FAQ List
                    </Link>
                </li>
                <li>
                    <Link 
                        to={'/add'} 
                        style={{ 
                            textDecoration: 'none',
                            color: '#F8F8F9',
                            fontWeight: '500',
                            fontSize: '1.1rem',
                            padding: '0.75rem 1.25rem',
                            borderRadius: '4px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            borderBottom: '2px solid transparent',
                            ':hover': {
                                color: '#C7AF6B',
                                borderBottom: '2px solid #C7AF6B'
                            }
                        }}
                    >
                        Add FAQ
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
