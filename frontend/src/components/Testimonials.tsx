import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => setCurrent(prev => (prev + 1) % testimonials.length);
  const prev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-heading" ref={ref}>
          <h2>
            <span className="section-number">07.</span>
            Testimonials
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="glass-card p-8 md:p-12 relative">
            <Quote size={48} className="text-accent/10 absolute top-6 left-6" />

            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                />
              </div>

              <p className="text-secondary text-lg leading-relaxed italic max-w-2xl mx-auto">
                "{testimonials[current].text}"
              </p>

              <div>
                <p className="font-semibold text-highlight">{testimonials[current].name}</p>
                <p className="text-accent text-sm">{testimonials[current].role}</p>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 pt-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? 'bg-accent w-6' : 'bg-border-theme'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg border border-theme text-secondary hover:text-accent hover:border-accent transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg border border-theme text-secondary hover:text-accent hover:border-accent transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
