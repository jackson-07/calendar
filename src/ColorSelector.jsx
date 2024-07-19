import './ColorSelector.css'

export default function ColorSelector({ categories, selectedCategory, onSelectCategory }) {
    return (
      <div className='color-selector'>
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-button ${selectedCategory === category.name ? 'selected' : ''}`}
            style={{ backgroundColor: category.color }}
            onClick={() => onSelectCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
    )
  }
