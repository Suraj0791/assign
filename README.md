# Mood Check-in App

A comprehensive React-based mood tracking application that helps users identify, record, and monitor their emotional states with an intuitive multi-step interface.

## 🚀 Features

- **Multi-step Mood Assessment**: 7-step guided process for comprehensive mood tracking
- **Interactive Mood Selection**: Visual emoji-based mood selection with intensity slider
- **Detailed Emotion Analysis**: Granular emotion categorization with stage identification
- **Activity Tracking**: Monitor daily activities and their correlation with mood
- **Smart Reminders**: Customizable reminder system with day selection
- **Calendar Overview**: Visual mood history with color-coded calendar
- **Responsive Design**: Fully optimized for desktop screens (≥1024px)
- **Smooth Animations**: Micro-interactions and transitions throughout the interface

## 🛠 Tech Stack

- **Frontend**: React 18 with Hooks (useState, useEffect)
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **State Management**: React state with multiple useState hooks
- **API Integration**: Mock API simulation with async/await

## 📱 Application Flow

1. **Instructions**: Welcome screen with app overview and usage guidelines
2. **Mood Selection**: Choose from 6 emotion categories (Angry, Sad, Neutral, Content, Happy, Awe)
3. **Mood Detail**: Intensity slider and emotion stage selection
4. **Reason**: Text input for mood context and reasoning
5. **Activities**: Multi-select activity tracker (up to 5 activities)
6. **Reminders**: Time and day selection for check-in notifications
7. **Calendar**: Visual mood history and final submission

## 🎨 Design Decisions

### Styling Approach
- **Tailwind CSS**: Chosen for rapid prototyping and consistent design system
- **Gradient Background**: Purple-to-yellow gradient creates a calming, positive atmosphere
- **Color Psychology**: Each mood has a distinct color scheme reflecting emotional associations
- **Rounded Corners**: Extensive use of rounded elements for a friendly, approachable feel

### Component Architecture
- **Single Component Design**: All functionality contained in one component for simplicity
- **Step-based Rendering**: Conditional rendering based on current step state
- **Centralized State Management**: Multiple useState hooks manage different aspects of the form

### User Experience
- **Progressive Disclosure**: Information revealed step-by-step to avoid overwhelming users
- **Visual Feedback**: Hover effects, scale transforms, and color changes provide immediate feedback
- **Accessibility**: High contrast colors and intuitive navigation patterns

## 🔧 Key Technical Implementations

### State Management
```javascript
const [currentStep, setCurrentStep] = useState(0);
const [selectedMood, setSelectedMood] = useState('');
const [moodIntensity, setMoodIntensity] = useState(50);
const [selectedStages, setSelectedStages] = useState([]);
// ... additional state variables
```

### Mood Data Structure
```javascript
const moods = [
  { id: 'angry', label: 'Angry', emoji: '😠', color: 'bg-red-500' },
  { id: 'sad', label: 'Sad', emoji: '😢', color: 'bg-blue-500' },
  // ... additional mood configurations
];
```

### API Integration
```javascript
const handleComplete = async () => {
  setIsSubmitting(true);
  const checkInData = {
    mood: selectedMood,
    intensity: moodIntensity,
    stages: selectedStages,
    reason: reasonText,
    activities: selectedActivities,
    reminder: { time: reminderTime, days: selectedDays },
    timestamp: new Date().toISOString()
  };
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Mood check-in submitted:', checkInData);
    setIsComplete(true);
  } catch (error) {
    console.error('Failed to submit mood check-in:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🎯 Performance Optimizations

- **Efficient Re-renders**: Strategic use of useState to minimize unnecessary re-renders
- **Conditional Rendering**: Only render current step components to reduce DOM complexity
- **CSS Transitions**: Hardware-accelerated CSS transforms for smooth animations
- **Event Handler Optimization**: Debounced state updates for slider interactions

## 🔄 Animations & Micro-interactions

- **Hover Effects**: Scale transforms on buttons and mood selection cards
- **Transition States**: Smooth color transitions for selected states
- **Loading States**: Submission feedback with disabled button states
- **Progress Indicators**: Bottom navigation dots with scale animations

## 📊 Data Structure

The app collects comprehensive mood data:

```javascript
{
  mood: "angry",
  intensity: 75,
  stages: ["Frustrated", "Fed Up"],
  reason: "Work deadline stress",
  activities: ["Work", "Exercise", "Reading"],
  reminder: {
    time: { hour: 3, minute: 0, ampm: "pm" },
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"]
  },
  timestamp: "2025-06-15T10:30:00.000Z"
}
```

## 🚧 Challenges Faced & Solutions

### Challenge 1: Complex State Management
**Problem**: Managing multiple interdependent form states across 7 different steps.
**Solution**: Implemented a centralized state management approach using multiple useState hooks, each responsible for specific data domains. This kept the code organized while maintaining React's declarative nature.

### Challenge 2: Dynamic Styling Based on Mood Selection
**Problem**: Applying different color schemes dynamically based on user's mood selection.
**Solution**: Created a mood configuration object with color mappings and used template literals to dynamically apply Tailwind classes. This approach maintained design consistency while allowing for mood-specific theming.

### Challenge 3: Responsive Calendar Component
**Problem**: Creating a visually appealing calendar that displays mood history with proper spacing and alignment.
**Solution**: Used CSS Grid for the calendar layout with responsive breakpoints. Implemented random color assignment for demonstration purposes, but structured the code to easily integrate with real mood data.

### Challenge 4: Smooth Multi-step Navigation
**Problem**: Ensuring smooth transitions between steps while maintaining form state.
**Solution**: Implemented a step-based rendering system with progress indicators. Each step validates required fields before allowing progression, ensuring data integrity throughout the flow.

## 🔄 Trade-offs & Future Improvements

### Current Trade-offs
1. **Single Component Architecture**: While simpler for this scope, it would benefit from component separation for larger applications
2. **Mock API Integration**: Currently uses setTimeout for simulation; real API integration would require error handling and retry logic
3. **Limited Accessibility**: Could benefit from ARIA labels, keyboard navigation, and screen reader optimizations
4. **Static Calendar Data**: Uses random colors for demonstration; real implementation would connect to user's mood history

### Future Enhancements
1. **Component Decomposition**: Split into smaller, reusable components for better maintainability
2. **Real API Integration**: Connect to actual backend with proper error handling and data persistence
3. **Advanced Analytics**: Add mood trends, patterns, and insights dashboard
4. **Accessibility Improvements**: Full ARIA compliance and keyboard navigation support
5. **Mobile Responsiveness**: Extend responsive design to mobile and tablet devices
6. **Data Visualization**: Enhanced charts and graphs for mood tracking over time
7. **User Authentication**: Personal accounts with secure data storage
8. **Notification System**: Real browser notifications for mood check-in reminders

## 📦 Installation & Setup

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using React and Tailwind CSS**