export const createBackup = () => {
  try {
    const backup = {
      timestamp: new Date().toISOString(),
      data: {}
    };

    // Local Storage의 모든 데이터 수집
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      backup.data[key] = localStorage.getItem(key);
    }

    // JSON 파일로 변환
    const backupBlob = new Blob(
      [JSON.stringify(backup, null, 2)], 
      { type: 'application/json' }
    );

    // 다운로드 링크 생성
    const url = URL.createObjectURL(backupBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `math-app-backup-${new Date().toISOString().slice(0,10)}.json`;
    
    // 다운로드 실행
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error('백업 생성 실패:', error);
    return false;
  }
};

export const restoreBackup = async (file) => {
  try {
    const text = await file.text();
    const backup = JSON.parse(text);

    // 백업 데이터 유효성 검사
    if (!backup.timestamp || !backup.data) {
      throw new Error('유효하지 않은 백업 파일입니다.');
    }

    // 기존 데이터 삭제
    localStorage.clear();

    // 백업 데이터 복원
    Object.entries(backup.data).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    return true;
  } catch (error) {
    console.error('백업 복원 실패:', error);
    return false;
  }
}; 