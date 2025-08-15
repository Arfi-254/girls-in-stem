import React, { useState } from 'react';
import { ChevronRight, Filter, MapPin, Award, Phone, Globe, Clock } from 'lucide-react';
import { techHubs, locations, types } from '../data';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  
  const featuredHub = techHubs.find(hub => hub.name === 'NieHub');

  const filteredTechHubs = techHubs.filter(hub => {
    const locationMatch = locationFilter === 'all' || hub.location === locationFilter;
    const typeMatch = selectedCategory === 'all' || hub.type === selectedCategory;
    const isNotFeatured = hub.name !== 'NieHub';
    return locationMatch && typeMatch && isNotFeatured;
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">STEM Resources in Kenya</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Discover local tech hubs, coding bootcamps, and science clubs where you can develop your STEM skills and connect with like-minded peers.
        </p>
      </div>

      <div className="mb-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-4 mb-4">
          <Filter className="w-5 h-5 text-pink-300" />
          <h3 className="text-lg font-semibold text-white">Filter Resources</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="location-filter" className="block text-sm font-medium text-gray-200 mb-2">
              Location
            </label>
            <select
              id="location-filter"
              value={locationFilter}
              onChange={handleLocationChange}
              className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location} className="bg-gray-800">
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="type-filter" className="block text-sm font-medium text-gray-200 mb-2">
              Type
            </label>
            <select
              id="type-filter"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              {types.map(type => (
                <option key={type} value={type} className="bg-gray-800">
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {featuredHub && (
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="w-8 h-8 text-pink-300" />
            <h2 className="text-3xl font-bold text-white">Featured Hub Spotlight</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src={featuredHub.image} 
                alt={featuredHub.name}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured Hub
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {featuredHub.type}
                </span>
              </div>
            </div>
            
            <div className="text-white space-y-4">
              <h3 className="text-3xl font-bold text-pink-300">
                {featuredHub.name}
              </h3>
              <div className="flex items-center space-x-4 text-lg">
                <span className="bg-purple-500/30 px-3 py-1 rounded-full">
                  {featuredHub.type}
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{featuredHub.location}</span>
                </span>
              </div>
              <p className="text-xl text-blue-100 leading-relaxed">
                {featuredHub.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-300" />
                  <span className="text-gray-200">Duration: {featuredHub.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span className="text-gray-200">Cost: {featuredHub.cost}</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Programs Offered:</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredHub.programs.map((program, index) => (
                    <span key={index} className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-green-300" />
                    <span className="text-green-200">{featuredHub.contact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-blue-300" />
                    <span className="text-blue-200">{featuredHub.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTechHubs.map((hub) => (
          <div 
            key={hub.id} 
            className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <img 
                src={hub.image} 
                alt={hub.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {hub.type}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {hub.location}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{hub.name}</h3>
              <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                {hub.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-green-300" />
                  <span className="text-gray-200">Duration: {hub.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span className="text-gray-200">Cost: {hub.cost}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Programs Offered:</h4>
                <div className="flex flex-wrap gap-1">
                  {hub.programs.slice(0, 3).map((program, index) => (
                    <span key={index} className="bg-purple-500/30 text-purple-200 px-2 py-1 rounded-full text-xs">
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-300" />
                  <span className="text-gray-200">{hub.contact}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-300 hover:text-blue-200 cursor-pointer">{hub.website}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTechHubs.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">No resources found</h3>
            <p className="text-gray-200">Try adjusting your filters to see more options.</p>
          </div>
        </div>
      )}

      <div className="mt-16 text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl p-12 border border-pink-300/30">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your STEM Journey?</h2>
        <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
          These resources are here to support you every step of the way. Don't hesitate to reach out and take that first step!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            Find Resources Near Me
          </button>
          <button className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300">
            Connect with Mentors
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;