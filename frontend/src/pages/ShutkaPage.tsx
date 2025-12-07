import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import './HeartSpinner.css' // Создайте этот CSS файл

export function HeartSpinnerPage() {
    const [rotationSpeed, setRotationSpeed] = useState(1)
    const [isSpinning, setIsSpinning] = useState(true)

    function toggleSpinning() {
        setIsSpinning(!isSpinning)
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <div className="mb-4">
                        {/* Вращающееся сердечко */}
                        <div 
                            className={`heart-icon ${isSpinning ? 'spinning' : ''}`}
                            style={{ 
                                animationDuration: `${rotationSpeed}s`,
                                fontSize: '100px',
                                display: 'inline-block'
                            }}
                        >
                            ❤️
                        </div>
                    </div>
                    
                    {/* Элементы управления */}
                    <div className="control-panel p-4 border rounded">
                        <div className="mb-3">
                            <label className="form-label">
                                Скорость вращения (секунд на оборот):
                            </label>
                            <input 
                                type="range" 
                                min="0.5" 
                                max="5" 
                                step="0.5"
                                value={rotationSpeed}
                                onChange={e => setRotationSpeed(parseFloat(e.target.value))}
                                className="form-range"
                            />
                            <div className="text-muted">
                                Текущая скорость: {rotationSpeed} сек
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <button 
                                className={`btn ${isSpinning ? 'btn-danger' : 'btn-success'} me-2`}
                                onClick={toggleSpinning}
                            >
                                {isSpinning ? 'Остановить' : 'Запустить'}
                            </button>
                            
                            <button 
                                className="btn btn-secondary"
                                onClick={() => setRotationSpeed(1)}
                            >
                                Сбросить скорость
                            </button>
                        </div>
                        
                        <div className="mt-3">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="autoSpin"
                                    checked={isSpinning}
                                    onChange={toggleSpinning}
                                />
                                <label className="form-check-label" htmlFor="autoSpin">
                                    Вращение {isSpinning ? 'включено' : 'выключено'}
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    {/* Информация */}
                    <div className="mt-4">
                        <p className="text-muted">
                            Сердечко {isSpinning ? 'вращается' : 'остановлено'}. 
                            Используйте ползунок для изменения скорости вращения.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}