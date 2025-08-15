import React, { useState, useEffect } from 'react'
import { ChevronRight, Star, Calendar, MapPin, Award, Heart, Share2, BookOpen } from 'lucide-react'
import { roleModels, categories } from '../data'

const HomePage = () => {
  const [currentRoleModel, setCurrentRoleModel] = useState(0)
  const [favorites, setFavorites] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleModel((prev) => (prev + 1) % roleModels.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const filteredRoleModels = selectedCategory === 'all' 
    ? roleModels 
    : roleModels.filter(model => model.category === selectedCategory)

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const shareStory = (name) => {
    if (navigator.share) {
      navigator.share({
        title: `Inspired by ${name}`,
        text: `Check out this amazing woman in STEM from Africa!`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(`Inspired by ${name} - ${window.location.href}`)
      alert('Link copied to clipboard!')
    }
  }

  const getIconComponent = (iconName) => {
    const iconMap = {
      Star,
      BookOpen,
      Award,
      Calendar
    }
    return iconMap[iconName] || Star
  }

  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Girls in STEM
            </h1>
            <h2 className="text-3xl font-semibold mb-6">African Women Leading Innovation</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Discover inspiring stories of African women breaking barriers in Science, Technology, Engineering, and Mathematics
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Celebrating African Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Inspiring the Next Generation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="w-8 h-8 text-pink-300" />
            <h2 className="text-3xl font-bold text-white">Role Model Spotlight</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src={roleModels[currentRoleModel].image} 
                alt={roleModels[currentRoleModel].name}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured Today
              </div>
            </div>
            
            <div className="text-white space-y-4">
              <h3 className="text-3xl font-bold text-pink-300">
                {roleModels[currentRoleModel].name}
              </h3>
              <div className="flex items-center space-x-4 text-lg">
                <span className="bg-purple-500/30 px-3 py-1 rounded-full">
                  {roleModels[currentRoleModel].field}
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{roleModels[currentRoleModel].country}</span>
                </span>
              </div>
              <blockquote className="text-xl italic text-blue-100 border-l-4 border-pink-300 pl-4">
                "{roleModels[currentRoleModel].quote}"
              </blockquote>
              <p className="text-gray-200 leading-relaxed">
                {roleModels[currentRoleModel].bio}
              </p>
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <p className="text-green-200">
                  <Award className="w-5 h-5 inline mr-2" />
                  <strong>Key Achievement:</strong> {roleModels[currentRoleModel].achievement}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => {
              const IconComponent = getIconComponent(category.icon)
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id 
                      ? 'bg-pink-500 text-white shadow-lg' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoleModels.map((model) => (
            <div 
              key={model.id} 
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button
                    onClick={() => toggleFavorite(model.id)}
                    className={`p-2 rounded-full transition-all ${
                      favorites.includes(model.id) 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-black/30 text-white hover:bg-pink-500'
                    }`}
                    aria-label={`${favorites.includes(model.id) ? 'Remove from' : 'Add to'} favorites`}
                  >
                    <Heart className="w-4 h-4" fill={favorites.includes(model.id) ? 'white' : 'none'} />
                  </button>
                  <button
                    onClick={() => shareStory(model.name)}
                    className="p-2 rounded-full bg-black/30 text-white hover:bg-blue-500 transition-all"
                    aria-label={`Share ${model.name}'s story`}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-purple-500/30 text-purple-200 px-2 py-1 rounded-full text-sm">
                    {model.field}
                  </span>
                  <span className="text-gray-300 text-sm flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {model.country}
                  </span>
                </div>
                <blockquote className="text-blue-100 italic text-sm mb-3 line-clamp-3">
                  "{model.quote}"
                </blockquote>
                <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                  {model.bio}
                </p>
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mb-4">
                  <p className="text-green-200 text-sm">
                    <Award className="w-4 h-4 inline mr-1" />
                    {model.achievement}
                  </p>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:from-pink-600 group-hover:to-purple-600">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl p-12 border border-pink-300/30">
          <h2 className="text-3xl font-bold text-white mb-4">You Could Be Next!</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Every great scientist, engineer, and innovator started with curiosity. Your journey in STEM can inspire the next generation of African girls.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Start Your STEM Journey
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage