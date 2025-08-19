/**
 * 파일 업로드 처리
 */
export const handleFileUpload = (file, callback) => {
    // 지원하는 파일 형식 확인
    const supportedTypes = ['text/plain', 'text/markdown'];
    const supportedExtensions = ['.txt', '.md'];
    
    const isValidType = supportedTypes.includes(file.type) || 
                       supportedExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
    
    if (!isValidType) {
      throw new Error('지원하지 않는 파일 형식입니다. .txt 또는 .md 파일만 업로드 가능합니다.');
    }
    
    // 파일 크기 제한 (5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      throw new Error('파일 크기가 너무 큽니다. 5MB 이하의 파일만 업로드 가능합니다.');
    }
    
    const reader = new FileReader();
    
    reader.onload = (event) => {
      try {
        const content = event.target.result;
        callback(content);
      } catch (error) {
        throw new Error('파일을 읽는 중 오류가 발생했습니다.');
      }
    };
    
    reader.onerror = () => {
      throw new Error('파일을 읽는 중 오류가 발생했습니다.');
    };
    
    reader.readAsText(file, 'UTF-8');
  };
  
  /**
   * JSON 파일로 내보내기
   */
  export const exportToJson = (data, filename = 'text-analysis') => {
    try {
      const jsonString = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}-${Date.now()}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // 메모리 정리
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('파일 내보내기 실패:', error);
      throw new Error('파일을 내보내는 중 오류가 발생했습니다.');
    }
  };
  
  /**
   * CSV 파일로 내보내기
   */
  export const exportToCsv = (data, filename = 'text-analysis') => {
    try {
      const headers = ['항목', '값'];
      const rows = [
        ['글자수', data.statistics.characters],
        ['단어수', data.statistics.words],
        ['문단수', data.statistics.paragraphs],
        ['줄수', data.statistics.lines],
        ['바이트수', data.statistics.bytes],
        ['읽기시간(분)', data.statistics.readingTimeMinutes],
        ['평균단어길이', data.statistics.averageWordLength],
        ['가장긴단어', data.statistics.longestWord],
        ['가장짧은단어', data.statistics.shortestWord]
      ];
      
      const csvContent = [headers, ...rows]
        .map(row => row.map(field => `"${field}"`).join(','))
        .join('\n');
      
      const blob = new Blob(['\uFEFF' + csvContent], { 
        type: 'text/csv;charset=utf-8;' 
      });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}-${Date.now()}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('CSV 내보내기 실패:', error);
      throw new Error('CSV 파일을 내보내는 중 오류가 발생했습니다.');
    }
  };
  
  /**
   * 클립보드에 텍스트 복사
   */
  export const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // 폴백: 구형 브라우저 지원
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      return true;
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
      throw new Error('클립보드에 복사하는 중 오류가 발생했습니다.');
    }
  };
  
  /**
   * 파일 형식 확인
   */
  export const validateFileType = (file) => {
    const allowedTypes = ['text/plain', 'text/markdown'];
    const allowedExtensions = ['.txt', '.md'];
    
    return allowedTypes.includes(file.type) || 
           allowedExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
  };
  
  /**
   * 파일 크기 확인 (바이트 단위)
   */
  export const validateFileSize = (file, maxSizeInMB = 5) => {
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return file.size <= maxSizeInBytes;
  };