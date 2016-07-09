import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  snapchatUsername(i) {
    return 'jacksparrow' + i;
  },
  fullName(i) {
    return 'Jack Sparrow' + i;
  },
  about: 'Ruby, Rails, JavaScript, React, legacy, CEO, remote work, DDD',
  snapcodeImage: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>    <svg height="320" version="1.1" viewBox="0 0 320 320" width="320" xmlns="http://www.w3.org/2000/svg">      <path d="M162.23,56.5c8.45,0,17.01,1.84,24.71,5.29c12.76,5.72,23.18,16.52,28.34,29.56c2.95,7.47,3.04,16.06,2.97,23.97c-0.04,4.56-0.25,9.13-0.52,13.68c-0.13,2.29-0.28,4.58-0.42,6.87c-0.08,1.26-0.16,2.51-0.23,3.77c-0.05,0.81-0.33,1.9-0.15,2.7c0.39,1.75,3.17,2.92,4.71,3.41c4.05,1.28,8.29,0.35,12.19-1.03c2.33-0.83,4.42-2.21,6.97-1.98c1.85,0.17,3.99,0.99,5.3,2.33c1.38,1.41,1.09,2.79-0.1,4.14c-2.26,2.56-5.98,4.02-9.13,5.05c-3.45,1.14-6.95,2.14-10.17,3.87c-3.17,1.7-6.09,4.15-7.34,7.63c-1.45,4.04-0.24,8.16,1.47,11.9c2.9,6.36,6.68,12.32,11.08,17.74c8.24,10.14,19.02,18.37,31.66,22.13c1.86,0.55,3.74,1.01,5.64,1.36c0.81,0.15,1.33-0.03,1.04,0.82c-0.04,0.11-0.11,0.21-0.17,0.31c-0.42,0.71-1.11,1.27-1.77,1.75c-3.72,2.72-8.63,3.98-13.03,5.06c-2.08,0.51-4.18,0.95-6.29,1.35c-2.09,0.39-4.64,0.4-6.6,1.25c-3.27,1.42-3.75,6.29-4.42,9.29c-0.26,1.17-0.53,2.35-0.84,3.51c-0.28,1.03-0.19,1.56-1.29,1.58c-1.89,0.03-3.79-0.47-5.63-0.81c-4.34-0.8-8.74-1.23-13.16-1.12c-4.82,0.12-9.75,0.67-14.24,2.54c-4.29,1.79-8.13,4.48-11.91,7.15c-6.6,4.66-13.31,9.28-21.33,11.06c-4.02,0.89-8.18,0.98-12.28,0.85c-4.37-0.14-8.68-1.05-12.74-2.68c-7.74-3.11-14.04-8.6-21.02-13c-3.97-2.5-8.19-4.48-12.85-5.21c-4.95-0.78-9.98-0.93-14.96-0.4c-1.93,0.21-3.85,0.51-5.76,0.87c-1.87,0.35-3.9,1.01-5.81,0.94c-0.9-0.04-0.91-0.31-1.15-1.16c-0.35-1.26-0.64-2.53-0.93-3.81c-0.43-1.95-0.8-3.95-1.5-5.83c-0.55-1.47-1.36-2.96-2.83-3.67c-1.88-0.91-4.46-0.89-6.5-1.27c-3.81-0.71-7.6-1.56-11.3-2.72c-3.18-1-7-2.22-9.39-4.7c-0.23-0.24-0.45-0.48-0.62-0.77c-0.06-0.09-0.13-0.19-0.17-0.29c-0.26-0.8,0.05-0.69,0.83-0.83c3.68-0.67,7.28-1.72,10.75-3.11c6.35-2.55,12.19-6.25,17.37-10.71c7.59-6.55,13.87-14.7,18.55-23.55c1.6-3.02,3.32-6.33,3.86-9.71c1.36-8.48-5.62-13.28-12.66-15.84c-3.74-1.36-7.59-2.29-11.08-4.27c-1.59-0.9-4.68-2.71-4.44-4.96c0.18-1.71,2.3-2.87,3.72-3.4c0.96-0.36,2.01-0.59,3.04-0.54c1.24,0.07,2.3,0.72,3.43,1.19c4.11,1.68,8.71,2.89,13.17,2.19c2.23-0.35,4.54-1.19,6.15-2.84c0.39-0.4,0.53-0.56,0.62-1.04c0.16-0.89-0.11-2.07-0.17-2.96c-0.14-2.37-0.29-4.74-0.44-7.11c-0.56-9.03-1.1-18.14-0.43-27.18c0.29-3.88,0.79-7.79,1.93-11.52c1.12-3.71,3.01-7.22,5.03-10.51c3.72-6.06,8.56-11.41,14.31-15.6c8.44-6.14,18.63-9.66,28.99-10.65C155.59,56.49,158.92,56.5,162.23,56.5M0,268.8C0,297.07,22.93,320,51.2,320L268.8,320C297.07,320,320,297.07,320,268.8L320,51.2C320,22.93,297.07,0,268.8,0L51.2,0C22.93,0,0,22.93,0,51.2L0,268.8" fill="#000000"/>      <path d="M6,51.2C6,26.24,26.24,6,51.2,6L268.8,6C293.76,6,314,26.24,314,51.2L314,268.8C314,293.76,293.76,314,268.8,314L51.2,314C26.24,314,6,293.76,6,268.8L6,51.2M162.23,51.72c-7.65,0.03-15.07,0.5-22.48,2.6c-11.81,3.35-22.46,10.08-30.2,19.66c-4.8,5.93-8.97,12.99-10.76,20.45c-2,8.32-1.98,17.09-1.72,25.59c0.14,4.49,0.4,8.98,0.68,13.46c0.07,1.08,0.14,2.16,0.21,3.25c0.05,0.73,0.58,3.49,0.14,3.98c-0.91,1.03-3.79,0.96-4.96,0.91c-2.1-0.08-4.18-0.58-6.16-1.25c-2.17-0.74-4.21-2.05-6.52-2.27c-3.62-0.35-7.62,1.15-10.12,3.79c-4.24,4.49-1.55,9.79,2.83,12.83c3.54,2.46,7.58,3.74,11.63,5.07c3.35,1.1,7.03,2.37,9.59,4.91c3.73,3.7,1.64,8.58-0.33,12.62c-1.53,3.15-3.33,6.18-5.28,9.09c-6.65,9.9-15.53,18.6-26.4,23.73c-3.27,1.54-6.71,2.75-10.23,3.58c-1.73,0.41-3.84,0.43-5.32,1.48c-1.62,1.14-2.29,3.12-1.9,5.03c0.97,4.87,6.81,7.41,10.93,8.94c3.64,1.35,7.41,2.31,11.2,3.11c2.31,0.49,4.63,0.91,6.96,1.29c1.14,0.19,1.66,0.11,2.07,1.21c0.32,0.85,0.53,1.74,0.74,2.63c0.52,2.17,0.93,4.36,1.53,6.52c0.39,1.41,0.9,2.76,2.09,3.69c3.08,2.42,7.96,0.55,11.38-0.06c9.15-1.62,19.11-1.57,27.34,3.17c7.15,4.11,13.33,9.69,20.81,13.26c7.96,3.81,16.76,4.9,25.5,4.09c8.19-0.76,15.6-4.12,22.39-8.61c7.42-4.9,14.25-11.11,23.37-12.35c4.97-0.67,10-0.63,14.96,0.06c3.44,0.48,7.01,1.68,10.51,1.37c4.74-0.41,5.24-5.58,6.06-9.31c0.33-1.5,0.48-3.75,1.38-5.04c0.53-0.76,2.02-0.68,2.92-0.83c1.27-0.22,2.54-0.45,3.81-0.69c6.64-1.3,14-2.82,19.71-6.68c1.65-1.11,3.23-2.54,4.05-4.39c0.77-1.74,0.8-3.77-0.37-5.35c-1.22-1.65-2.99-1.84-4.86-2.21c-6.96-1.4-13.55-4.29-19.4-8.28c-8.98-6.12-16.26-14.63-21.68-24c-1.13-1.95-2.16-3.95-3.1-6c-1.45-3.16-2.76-6.9-0.5-10.03c2.08-2.88,5.83-4.33,9.06-5.46c3.97-1.4,7.98-2.48,11.64-4.64c2.67-1.58,5.47-3.81,6.23-6.97c2-8.31-9.87-12.52-16.05-9.86c-3.81,1.64-8.44,3.74-12.65,2.35c-0.27-0.09-0.75-0.18-0.95-0.38c-0.34-0.35-0.16-0.9-0.13-1.44c0.07-1.22,0.15-2.43,0.22-3.65c0.12-1.88,0.24-3.76,0.35-5.64c0.53-8.89,0.95-17.87,0.14-26.76c-0.36-3.95-0.96-7.92-2.17-11.7c-1.18-3.69-3.03-7.21-5.02-10.52c-3.71-6.18-8.46-11.71-14.13-16.17c-8.53-6.71-18.89-10.83-29.59-12.43C168.56,51.98,165.39,51.72,162.23,51.72M69.03,14.27A5.13,5.13,0,0,0,69.03,24.53A5.13,5.13,0,0,0,69.03,14.27M85.57,14.27A5.13,5.13,0,0,0,85.57,24.53A5.13,5.13,0,0,0,85.57,14.27M118.65,14.27A5.13,5.13,0,0,0,118.65,24.53A5.13,5.13,0,0,0,118.65,14.27M168.27,14.27A5.13,5.13,0,0,0,168.27,24.53A5.13,5.13,0,0,0,168.27,14.27M184.81,14.27A5.13,5.13,0,0,0,184.81,24.53A5.13,5.13,0,0,0,184.81,14.27M201.35,14.27A5.13,5.13,0,0,0,201.35,24.53A5.13,5.13,0,0,0,201.35,14.27M250.97,14.27A5.13,5.13,0,0,0,250.97,24.53A5.13,5.13,0,0,0,250.97,14.27M35.94,30.81A5.13,5.13,0,0,0,35.94,41.07A5.13,5.13,0,0,0,35.94,30.81M102.11,30.81A5.13,5.13,0,0,0,102.11,41.07A5.13,5.13,0,0,0,102.11,30.81M118.65,30.81A5.13,5.13,0,0,0,118.65,41.07A5.13,5.13,0,0,0,118.65,30.81M168.27,30.81A5.13,5.13,0,0,0,168.27,41.07A5.13,5.13,0,0,0,168.27,30.81M184.81,30.81A5.13,5.13,0,0,0,184.81,41.07A5.13,5.13,0,0,0,184.81,30.81M201.35,30.81A5.13,5.13,0,0,0,201.35,41.07A5.13,5.13,0,0,0,201.35,30.81M250.97,30.81A5.13,5.13,0,0,0,250.97,41.07A5.13,5.13,0,0,0,250.97,30.81M267.51,30.81A5.13,5.13,0,0,0,267.51,41.07A5.13,5.13,0,0,0,267.51,30.81M35.94,47.36A5.13,5.13,0,0,0,35.94,57.62A5.13,5.13,0,0,0,35.94,47.36M284.06,47.36A5.13,5.13,0,0,0,284.06,57.62A5.13,5.13,0,0,0,284.06,47.36M19.4,63.9A5.13,5.13,0,0,0,19.4,74.16A5.13,5.13,0,0,0,19.4,63.9M35.94,63.9A5.13,5.13,0,0,0,35.94,74.16A5.13,5.13,0,0,0,35.94,63.9M234.43,63.9A5.13,5.13,0,0,0,234.43,74.16A5.13,5.13,0,0,0,234.43,63.9M250.97,63.9A5.13,5.13,0,0,0,250.97,74.16A5.13,5.13,0,0,0,250.97,63.9M300.6,63.9A5.13,5.13,0,0,0,300.6,74.16A5.13,5.13,0,0,0,300.6,63.9M35.94,80.44A5.13,5.13,0,0,0,35.94,90.7A5.13,5.13,0,0,0,35.94,80.44M52.49,80.44A5.13,5.13,0,0,0,52.49,90.7A5.13,5.13,0,0,0,52.49,80.44M69.03,80.44A5.13,5.13,0,0,0,69.03,90.7A5.13,5.13,0,0,0,69.03,80.44M85.57,80.44A5.13,5.13,0,0,0,85.57,90.7A5.13,5.13,0,0,0,85.57,80.44M234.43,80.44A5.13,5.13,0,0,0,234.43,90.7A5.13,5.13,0,0,0,234.43,80.44M250.97,80.44A5.13,5.13,0,0,0,250.97,90.7A5.13,5.13,0,0,0,250.97,80.44M284.06,80.44A5.13,5.13,0,0,0,284.06,90.7A5.13,5.13,0,0,0,284.06,80.44M300.6,80.44A5.13,5.13,0,0,0,300.6,90.7A5.13,5.13,0,0,0,300.6,80.44M35.94,96.98A5.13,5.13,0,0,0,35.94,107.24A5.13,5.13,0,0,0,35.94,96.98M52.49,96.98A5.13,5.13,0,0,0,52.49,107.24A5.13,5.13,0,0,0,52.49,96.98M284.06,96.98A5.13,5.13,0,0,0,284.06,107.24A5.13,5.13,0,0,0,284.06,96.98M300.6,96.98A5.13,5.13,0,0,0,300.6,107.24A5.13,5.13,0,0,0,300.6,96.98M19.4,113.52A5.13,5.13,0,0,0,19.4,123.78A5.13,5.13,0,0,0,19.4,113.52M52.49,113.52A5.13,5.13,0,0,0,52.49,123.78A5.13,5.13,0,0,0,52.49,113.52M85.57,113.52A5.13,5.13,0,0,0,85.57,123.78A5.13,5.13,0,0,0,85.57,113.52M234.43,113.52A5.13,5.13,0,0,0,234.43,123.78A5.13,5.13,0,0,0,234.43,113.52M267.51,113.52A5.13,5.13,0,0,0,267.51,123.78A5.13,5.13,0,0,0,267.51,113.52M284.06,113.52A5.13,5.13,0,0,0,284.06,123.78A5.13,5.13,0,0,0,284.06,113.52M19.4,130.06A5.13,5.13,0,0,0,19.4,140.32A5.13,5.13,0,0,0,19.4,130.06M284.06,130.06A5.13,5.13,0,0,0,284.06,140.32A5.13,5.13,0,0,0,284.06,130.06M300.6,130.06A5.13,5.13,0,0,0,300.6,140.32A5.13,5.13,0,0,0,300.6,130.06M19.4,146.6A5.13,5.13,0,0,0,19.4,156.86A5.13,5.13,0,0,0,19.4,146.6M35.94,146.6A5.13,5.13,0,0,0,35.94,156.86A5.13,5.13,0,0,0,35.94,146.6M52.49,163.14A5.13,5.13,0,0,0,52.49,173.4A5.13,5.13,0,0,0,52.49,163.14M300.6,163.14A5.13,5.13,0,0,0,300.6,173.4A5.13,5.13,0,0,0,300.6,163.14M19.4,179.68A5.13,5.13,0,0,0,19.4,189.94A5.13,5.13,0,0,0,19.4,179.68M52.49,179.68A5.13,5.13,0,0,0,52.49,189.94A5.13,5.13,0,0,0,52.49,179.68M69.03,179.68A5.13,5.13,0,0,0,69.03,189.94A5.13,5.13,0,0,0,69.03,179.68M267.51,179.68A5.13,5.13,0,0,0,267.51,189.94A5.13,5.13,0,0,0,267.51,179.68M284.06,179.68A5.13,5.13,0,0,0,284.06,189.94A5.13,5.13,0,0,0,284.06,179.68M19.4,196.22A5.13,5.13,0,0,0,19.4,206.48A5.13,5.13,0,0,0,19.4,196.22M52.49,196.22A5.13,5.13,0,0,0,52.49,206.48A5.13,5.13,0,0,0,52.49,196.22M284.06,196.22A5.13,5.13,0,0,0,284.06,206.48A5.13,5.13,0,0,0,284.06,196.22M300.6,196.22A5.13,5.13,0,0,0,300.6,206.48A5.13,5.13,0,0,0,300.6,196.22M19.4,212.76A5.13,5.13,0,0,0,19.4,223.02A5.13,5.13,0,0,0,19.4,212.76M35.94,212.76A5.13,5.13,0,0,0,35.94,223.02A5.13,5.13,0,0,0,35.94,212.76M284.06,212.76A5.13,5.13,0,0,0,284.06,223.02A5.13,5.13,0,0,0,284.06,212.76M300.6,212.76A5.13,5.13,0,0,0,300.6,223.02A5.13,5.13,0,0,0,300.6,212.76M35.94,229.3A5.13,5.13,0,0,0,35.94,239.56A5.13,5.13,0,0,0,35.94,229.3M284.06,229.3A5.13,5.13,0,0,0,284.06,239.56A5.13,5.13,0,0,0,284.06,229.3M19.4,245.84A5.13,5.13,0,0,0,19.4,256.1A5.13,5.13,0,0,0,19.4,245.84M35.94,245.84A5.13,5.13,0,0,0,35.94,256.1A5.13,5.13,0,0,0,35.94,245.84M52.49,245.84A5.13,5.13,0,0,0,52.49,256.1A5.13,5.13,0,0,0,52.49,245.84M250.97,245.84A5.13,5.13,0,0,0,250.97,256.1A5.13,5.13,0,0,0,250.97,245.84M300.6,245.84A5.13,5.13,0,0,0,300.6,256.1A5.13,5.13,0,0,0,300.6,245.84M52.49,262.38A5.13,5.13,0,0,0,52.49,272.64A5.13,5.13,0,0,0,52.49,262.38M85.57,262.38A5.13,5.13,0,0,0,85.57,272.64A5.13,5.13,0,0,0,85.57,262.38M102.11,262.38A5.13,5.13,0,0,0,102.11,272.64A5.13,5.13,0,0,0,102.11,262.38M118.65,262.38A5.13,5.13,0,0,0,118.65,272.64A5.13,5.13,0,0,0,118.65,262.38M201.35,262.38A5.13,5.13,0,0,0,201.35,272.64A5.13,5.13,0,0,0,201.35,262.38M35.94,278.93A5.13,5.13,0,0,0,35.94,289.19A5.13,5.13,0,0,0,35.94,278.93M52.49,278.93A5.13,5.13,0,0,0,52.49,289.19A5.13,5.13,0,0,0,52.49,278.93M69.03,278.93A5.13,5.13,0,0,0,69.03,289.19A5.13,5.13,0,0,0,69.03,278.93M85.57,278.93A5.13,5.13,0,0,0,85.57,289.19A5.13,5.13,0,0,0,85.57,278.93M184.81,278.93A5.13,5.13,0,0,0,184.81,289.19A5.13,5.13,0,0,0,184.81,278.93M201.35,278.93A5.13,5.13,0,0,0,201.35,289.19A5.13,5.13,0,0,0,201.35,278.93M267.51,278.93A5.13,5.13,0,0,0,267.51,289.19A5.13,5.13,0,0,0,267.51,278.93M284.06,278.93A5.13,5.13,0,0,0,284.06,289.19A5.13,5.13,0,0,0,284.06,278.93M135.19,295.47A5.13,5.13,0,0,0,135.19,305.73A5.13,5.13,0,0,0,135.19,295.47M168.27,295.47A5.13,5.13,0,0,0,168.27,305.73A5.13,5.13,0,0,0,168.27,295.47M184.81,295.47A5.13,5.13,0,0,0,184.81,305.73A5.13,5.13,0,0,0,184.81,295.47M201.35,295.47A5.13,5.13,0,0,0,201.35,305.73A5.13,5.13,0,0,0,201.35,295.47M234.43,295.47A5.13,5.13,0,0,0,234.43,305.73A5.13,5.13,0,0,0,234.43,295.47M250.97,295.47A5.13,5.13,0,0,0,250.97,305.73A5.13,5.13,0,0,0,250.97,295.47" fill="#FFFC00"/>      <path d="M162.23,56.5c8.45,0,17.01,1.84,24.71,5.29c12.76,5.72,23.18,16.52,28.34,29.56c2.95,7.47,3.04,16.06,2.97,23.97c-0.04,4.56-0.25,9.13-0.52,13.68c-0.13,2.29-0.28,4.58-0.42,6.87c-0.08,1.26-0.16,2.51-0.23,3.77c-0.05,0.81-0.33,1.9-0.15,2.7c0.39,1.75,3.17,2.92,4.71,3.41c4.05,1.28,8.29,0.35,12.19-1.03c2.33-0.83,4.42-2.21,6.97-1.98c1.85,0.17,3.99,0.99,5.3,2.33c1.38,1.41,1.09,2.79-0.1,4.14c-2.26,2.56-5.98,4.02-9.13,5.05c-3.45,1.14-6.95,2.14-10.17,3.87c-3.17,1.7-6.09,4.15-7.34,7.63c-1.45,4.04-0.24,8.16,1.47,11.9c2.9,6.36,6.68,12.32,11.08,17.74c8.24,10.14,19.02,18.37,31.66,22.13c1.86,0.55,3.74,1.01,5.64,1.36c0.81,0.15,1.33-0.03,1.04,0.82c-0.04,0.11-0.11,0.21-0.17,0.31c-0.42,0.71-1.11,1.27-1.77,1.75c-3.72,2.72-8.63,3.98-13.03,5.06c-2.08,0.51-4.18,0.95-6.29,1.35c-2.09,0.39-4.64,0.4-6.6,1.25c-3.27,1.42-3.75,6.29-4.42,9.29c-0.26,1.17-0.53,2.35-0.84,3.51c-0.28,1.03-0.19,1.56-1.29,1.58c-1.89,0.03-3.79-0.47-5.63-0.81c-4.34-0.8-8.74-1.23-13.16-1.12c-4.82,0.12-9.75,0.67-14.24,2.54c-4.29,1.79-8.13,4.48-11.91,7.15c-6.6,4.66-13.31,9.28-21.33,11.06c-4.02,0.89-8.18,0.98-12.28,0.85c-4.37-0.14-8.68-1.05-12.74-2.68c-7.74-3.11-14.04-8.6-21.02-13c-3.97-2.5-8.19-4.48-12.85-5.21c-4.95-0.78-9.98-0.93-14.96-0.4c-1.93,0.21-3.85,0.51-5.76,0.87c-1.87,0.35-3.9,1.01-5.81,0.94c-0.9-0.04-0.91-0.31-1.15-1.16c-0.35-1.26-0.64-2.53-0.93-3.81c-0.43-1.95-0.8-3.95-1.5-5.83c-0.55-1.47-1.36-2.96-2.83-3.67c-1.88-0.91-4.46-0.89-6.5-1.27c-3.81-0.71-7.6-1.56-11.3-2.72c-3.18-1-7-2.22-9.39-4.7c-0.23-0.24-0.45-0.48-0.62-0.77c-0.06-0.09-0.13-0.19-0.17-0.29c-0.26-0.8,0.05-0.69,0.83-0.83c3.68-0.67,7.28-1.72,10.75-3.11c6.35-2.55,12.19-6.25,17.37-10.71c7.59-6.55,13.87-14.7,18.55-23.55c1.6-3.02,3.32-6.33,3.86-9.71c1.36-8.48-5.62-13.28-12.66-15.84c-3.74-1.36-7.59-2.29-11.08-4.27c-1.59-0.9-4.68-2.71-4.44-4.96c0.18-1.71,2.3-2.87,3.72-3.4c0.96-0.36,2.01-0.59,3.04-0.54c1.24,0.07,2.3,0.72,3.43,1.19c4.11,1.68,8.71,2.89,13.17,2.19c2.23-0.35,4.54-1.19,6.15-2.84c0.39-0.4,0.53-0.56,0.62-1.04c0.16-0.89-0.11-2.07-0.17-2.96c-0.14-2.37-0.29-4.74-0.44-7.11c-0.56-9.03-1.1-18.14-0.43-27.18c0.29-3.88,0.79-7.79,1.93-11.52c1.12-3.71,3.01-7.22,5.03-10.51c3.72-6.06,8.56-11.41,14.31-15.6c8.44-6.14,18.63-9.66,28.99-10.65C155.59,56.49,158.92,56.5,162.23,56.5" fill="#FFFFFF"/>    </svg>'
});
